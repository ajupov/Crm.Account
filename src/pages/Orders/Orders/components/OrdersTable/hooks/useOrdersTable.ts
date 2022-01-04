import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import { Guid } from 'guid-typescript'
import Order from '../../../../../../../api/orders/models/Order'
import OrdersContext from '../../../contexts/OrdersContext/OrdersContext'
import OrdersRoutes from '../../../routes/OrdersRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useOrderView from '../../OrderView/hooks/useOrderView'

interface UseOrdersTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (orders: Order[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useOrdersTable = (): UseOrdersTableReturn => {
    const state = useContext(OrdersContext)
    const { onClickDelete, onClickRestore } = useOrderView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const orders = (await state.getAll())?.orders
        if (!orders) {
            return
        }

        const fileName = getFileNameWithDateTime('Заказы')
        const headers = [
            'Идентификатор',
            'Идентификатор типа',
            'Идентификатор статуса',
            'Идентификатор клиента',
            'Название',
            'Дата начала',
            'Дата окончания',
            'Сумма',
            'Сумма без скидки',
            'Удален',
            'Создан',
            'Изменен'
        ]
        const csv = convertObjectToCSV([headers, ...orders])

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
        (orders: Order[]) =>
            orders.map(
                order =>
                    ({
                        id: order.id,
                        cells: [
                            { value: order.type?.name, textAlign: 'left' },
                            { value: order.status?.name, textAlign: 'left' },
                            { value: order.name, textAlign: 'left' },
                            {
                                value: order.customerId === Guid.EMPTY ? '' : order.customerId,
                                textAlign: 'left'
                            },
                            {
                                value: order.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(order.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: order.isDeleted,
                        viewLink: OrdersRoutes.View,
                        editLink: OrdersRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Type',
                label: 'Тип',
                width: 1
            },
            {
                key: 'Status',
                label: 'Статус',
                width: 1
            },
            {
                key: 'Name',
                label: 'Название',
                width: 3,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'CustomerId',
                label: 'ID клиента',
                width: 3
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 2,
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

export default useOrdersTable
