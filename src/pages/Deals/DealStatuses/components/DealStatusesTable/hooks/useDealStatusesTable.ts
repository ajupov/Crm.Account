import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import DealStatus from '../../../../../../../api/orders/models/DealStatus'
import DealStatusesContext from '../../../contexts/DealStatusesContext/DealStatusesContext'
import DealStatusesRoutes from '../../../routes/DealStatusesRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useDealStatusView from '../../DealStatusView/hooks/useDealStatusView'

interface UseDealStatusesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (statuses: DealStatus[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useDealStatusesTable = (): UseDealStatusesTableReturn => {
    const state = useContext(DealStatusesContext)
    const { onClickDelete, onClickRestore } = useDealStatusView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const statuses = (await state.getAll())?.statuses
        if (!statuses) {
            return
        }

        const fileName = getFileNameWithDateTime('Статусы сделки')
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...statuses])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickSort = useCallback(
        (columnName: string) => {
            if (state.request.sortBy !== columnName) {
                state.setRequest({ ...state.request, sortBy: columnName, orderBy: 'asc' })
            } else {
                state.setRequest({ ...state.request, orderBy: state.request.orderBy === 'asc' ? 'desc' : 'asc' })
            }
        },
        [state]
    )

    const getOrderBy = useCallback(
        (columnName: string) => {
            if (state.request.sortBy === columnName) {
                return state.request.orderBy
            }

            return void 0
        },
        [state.request.orderBy, state.request.sortBy]
    )

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const map = useCallback(
        (statuses: DealStatus[]) =>
            statuses.map(
                status =>
                    ({
                        id: status.id,
                        cells: [
                            { value: status.name, textAlign: 'left' },
                            {
                                value: status.createDateTime
                                    ? getDateTimeAsRecently(new Date(status.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: status.isDeleted,
                        viewLink: DealStatusesRoutes.View,
                        editLink: DealStatusesRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Name',
                label: 'Наименование',
                width: 10,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 4,
                onClick: () => onClickSort('CreateDateTime'),
                orderBy: getOrderBy('CreateDateTime')
            }
        ],
        [getOrderBy, onClickSort]
    )

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useDealStatusesTable
