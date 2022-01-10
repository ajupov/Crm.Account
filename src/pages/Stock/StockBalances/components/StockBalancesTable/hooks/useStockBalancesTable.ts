import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import StockBalance from '../../../../../../../api/stock/models/StockBalance'
import StockBalancesContext from '../../../contexts/StockBalancesContext/StockBalancesContext'
import StockBalancesRoutes from '../../../routes/StockBalancesRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useStockBalanceView from '../../StockBalanceView/hooks/useStockBalanceView'

interface UseStockBalancesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (stockBalances: StockBalance[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useStockBalancesTable = (): UseStockBalancesTableReturn => {
    const state = useContext(StockBalancesContext)
    const { onClickDelete, onClickRestore } = useStockBalanceView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const stockBalances = (await state.getAll())?.balances
        if (!stockBalances) {
            return
        }

        const fileName = getFileNameWithDateTime('Остатки')
        const headers = ['Идентификатор', 'ID склада', 'ID продукта', 'Количество', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...stockBalances])

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
        (stockBalances: StockBalance[]) =>
            stockBalances.map(
                stockBalance =>
                    ({
                        id: stockBalance.id,
                        cells: [
                            { value: stockBalance.room?.name, textAlign: 'left' },
                            { value: stockBalance.productId, textAlign: 'left' },
                            { value: stockBalance.count, textAlign: 'right' },
                            {
                                value: stockBalance.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(stockBalance.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: stockBalance.isDeleted,
                        viewLink: StockBalancesRoutes.View,
                        editLink: StockBalancesRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'RoomId',
                label: 'Склад',
                width: 4,
                onClick: () => onClickSort('RoomId'),
                orderBy: getOrderBy('RoomId')
            },
            {
                key: 'ProductId',
                label: 'ID продукта',
                width: 6,
                onClick: () => onClickSort('ProductId'),
                orderBy: getOrderBy('ProductId')
            },
            {
                key: 'Count',
                label: 'Количество',
                align: 'right',
                width: 2,
                onClick: () => onClickSort('Count'),
                orderBy: getOrderBy('Count')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 3,
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

export default useStockBalancesTable
