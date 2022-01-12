import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import StockArrival from '../../../../../../../api/stock/models/StockArrival'
import StockArrivalsContext from '../../../contexts/StockArrivalsContext/StockArrivalsContext'
import StockArrivalsRoutes from '../../../routes/StockArrivalsRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import { getStockArrivalTypeName } from '../../../helpers/stockArrivalTypeHelper'
import useStockArrivalView from '../../StockArrivalView/hooks/useStockArrivalView'

interface UseStockArrivalsTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (stockArrivals: StockArrival[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useStockArrivalsTable = (): UseStockArrivalsTableReturn => {
    const state = useContext(StockArrivalsContext)
    const { onClickDelete, onClickRestore } = useStockArrivalView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const stockArrivals = (await state.getAll())?.arrivals
        if (!stockArrivals) {
            return
        }

        const fileName = getFileNameWithDateTime('Приходы')
        const headers = [
            'Идентификатор',
            'Тип',
            'ID поставщика',
            'ID заказа',
            'ID инвентаризации',
            'Удален',
            'Создан',
            'Изменен'
        ]
        const csv = convertObjectToCSV([headers, ...stockArrivals])

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
        (stockArrivals: StockArrival[]) =>
            stockArrivals.map(
                stockArrival =>
                    ({
                        id: stockArrival.id,
                        cells: [
                            { value: getStockArrivalTypeName(stockArrival.type), textAlign: 'left' },
                            {
                                value: stockArrival.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(stockArrival.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: stockArrival.isDeleted,
                        viewLink: StockArrivalsRoutes.View,
                        editLink: StockArrivalsRoutes.Edit,
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
                width: 4,
                onClick: () => onClickSort('Type'),
                orderBy: getOrderBy('Type')
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

export default useStockArrivalsTable
