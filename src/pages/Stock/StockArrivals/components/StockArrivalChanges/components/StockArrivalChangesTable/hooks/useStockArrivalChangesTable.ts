import { addUtcKind, getDateTimeAsRecently } from '../../../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import StockArrival from '../../../../../../../../../api/stock/models/StockArrival'
import StockArrivalChange from '../../../../../../../../../api/stock/models/StockArrivalChange'
import StockArrivalChangesContext from '../../../../../contexts/StockArrivalChangesContext/StockArrivalChangesContext'
import { TableBodyRowProps } from '../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../../helpers/fileNameHelper'
import { getStockArrivalTypeName } from '../../../../../helpers/stockArrivalTypeHelper'
import { getValueOrEmpty } from '../../../../../../../../helpers/entityFieldValueHelper'

interface UseStockArrivalChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (stockArrivals: StockArrivalChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useStockArrivalChangesTable = (): UseStockArrivalChangesTableReturn => {
    const state = useContext(StockArrivalChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений прихода')
        const headers = ['Идентификатор', 'Идентификатор прихода', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: StockArrivalChange) => {
        if (!change.oldValueJson && change.newValueJson) {
            return 'Создан'
        }

        if (change.oldValueJson && change.newValueJson) {
            return 'Изменен'
        }

        if (change.oldValueJson && !change.newValueJson) {
            return 'Удален'
        }

        return ''
    }, [])

    const getChangeValue = useCallback((change: StockArrivalChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as StockArrival) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as StockArrival) : void 0

        return [
            `Тип: ${getValueOrEmpty(getStockArrivalTypeName(oldValue?.type))} → ${getValueOrEmpty(
                getStockArrivalTypeName(newValue?.type)
            )}`,
            `ID поставщика: ${getValueOrEmpty(oldValue?.supplierId)} → ${getValueOrEmpty(newValue?.supplierId)}`,
            `ID заказа: ${getValueOrEmpty(oldValue?.orderId)} → ${getValueOrEmpty(newValue?.orderId)}`,
            `ID инвентаризации: ${getValueOrEmpty(oldValue?.inventoryId)} → ${getValueOrEmpty(newValue?.inventoryId)}`,
            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: StockArrivalChange[]) =>
            changes.map(
                change =>
                    ({
                        id: change.id,
                        cells: [
                            { value: getChangeName(change), textAlign: 'center' },
                            { value: getChangeValue(change), textAlign: 'left' },
                            {
                                value: change.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(change.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ]
                    } as TableBodyRowProps)
            ),
        [getChangeName, getChangeValue]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Action',
                label: 'Действие',
                width: 3
            },
            {
                key: 'Changes',
                label: 'Изменения',
                width: 10
            },
            {
                key: 'CreateDateTime',
                label: 'Дата и время',
                width: 3
            }
        ],
        []
    )

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useStockArrivalChangesTable
