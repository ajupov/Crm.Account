import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import StockConsumption from '../../../../../../../api/stock/models/StockConsumption'
import StockConsumptionsContext from '../../../contexts/StockConsumptionsContext/StockConsumptionsContext'
import StockConsumptionsRoutes from '../../../routes/StockConsumptionsRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import { getStockConsumptionTypeName } from '../../../helpers/stockConsumptionTypeHelper'
import useStockConsumptionView from '../../StockConsumptionView/hooks/useStockConsumptionView'

interface UseStockConsumptionsTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (stockConsumptions: StockConsumption[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useStockConsumptionsTable = (): UseStockConsumptionsTableReturn => {
    const state = useContext(StockConsumptionsContext)
    const { onClickDelete, onClickRestore } = useStockConsumptionView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const stockConsumptions = (await state.getAll())?.consumptions
        if (!stockConsumptions) {
            return
        }

        const fileName = getFileNameWithDateTime('Расходы')
        const headers = ['Идентификатор', 'Тип', 'ID заказа', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...stockConsumptions])

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
        (stockConsumptions: StockConsumption[]) =>
            stockConsumptions.map(
                stockConsumption =>
                    ({
                        id: stockConsumption.id,
                        cells: [
                            { value: getStockConsumptionTypeName(stockConsumption.type), textAlign: 'left' },
                            {
                                value: stockConsumption.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(stockConsumption.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: stockConsumption.isDeleted,
                        viewLink: StockConsumptionsRoutes.View,
                        editLink: StockConsumptionsRoutes.Edit,
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

export default useStockConsumptionsTable
