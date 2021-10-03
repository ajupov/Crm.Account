import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import DealType from '../../../../../../../api/orders/models/DealType'
import DealTypesContext from '../../../contexts/DealTypesContext/DealTypesContext'
import DealTypesRoutes from '../../../routes/DealTypesRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useDealTypeView from '../../DealTypeView/hooks/useDealTypeView'

interface UseDealTypesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (types: DealType[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useDealTypesTable = (): UseDealTypesTableReturn => {
    const state = useContext(DealTypesContext)
    const { onClickDelete, onClickRestore } = useDealTypeView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const types = (await state.getAll())?.types
        if (!types) {
            return
        }

        const fileName = getFileNameWithDateTime('Типы сделки')
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...types])

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
        (types: DealType[]) =>
            types.map(
                type =>
                    ({
                        id: type.id,
                        cells: [
                            { value: type.name, textAlign: 'left' },
                            {
                                value: type.createDateTime ? getDateTimeAsRecently(new Date(type.createDateTime)) : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: type.isDeleted,
                        viewLink: DealTypesRoutes.View,
                        editLink: DealTypesRoutes.Edit,
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

export default useDealTypesTable
