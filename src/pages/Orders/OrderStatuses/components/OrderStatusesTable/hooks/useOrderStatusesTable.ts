import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import OrderStatus from '../../../../../../../api/orders/models/OrderStatus'
import OrderStatusesContext from '../../../contexts/OrderStatusesContext/OrderStatusesContext'
import OrderStatusesRoutes from '../../../routes/OrderStatusesRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useOrderStatusView from '../../OrderStatusView/hooks/useOrderStatusView'

interface UseOrderStatusesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (statuses: OrderStatus[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useOrderStatusesTable = (): UseOrderStatusesTableReturn => {
    const state = useContext(OrderStatusesContext)
    const { onClickDelete, onClickRestore } = useOrderStatusView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const statuses = (await state.getAll())?.statuses
        if (!statuses) {
            return
        }

        const fileName = getFileNameWithDateTime('Статусы заказа')
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Конечный', 'Создан', 'Изменен']
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
        (statuses: OrderStatus[]) =>
            statuses.map(
                status =>
                    ({
                        id: status.id,
                        cells: [
                            { value: status.name, textAlign: 'left' },
                            {
                                value: status.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(status.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: status.isDeleted,
                        viewLink: OrderStatusesRoutes.View,
                        editLink: OrderStatusesRoutes.Edit,
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

export default useOrderStatusesTable
