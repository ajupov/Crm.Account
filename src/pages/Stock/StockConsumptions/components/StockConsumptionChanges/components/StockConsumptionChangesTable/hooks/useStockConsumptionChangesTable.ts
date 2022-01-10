import { addUtcKind, getDateTimeAsRecently } from '../../../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import StockConsumption from '../../../../../../../../../api/stock/models/StockConsumption'
import StockConsumptionChange from '../../../../../../../../../api/stock/models/StockConsumptionChange'
import StockConsumptionChangesContext from '../../../../../contexts/StockConsumptionChangesContext/StockConsumptionChangesContext'
import { TableBodyRowProps } from '../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../../helpers/fileNameHelper'
import { getStockConsumptionTypeName } from '../../../../../helpers/stockConsumptionTypeHelper'
import { getValueOrEmpty } from '../../../../../../../../helpers/entityFieldValueHelper'

interface UseStockConsumptionChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (stockConsumptions: StockConsumptionChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useStockConsumptionChangesTable = (): UseStockConsumptionChangesTableReturn => {
    const state = useContext(StockConsumptionChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений расхода')
        const headers = ['Идентификатор', 'Идентификатор расхода', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: StockConsumptionChange) => {
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

    const getChangeValue = useCallback((change: StockConsumptionChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as StockConsumption) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as StockConsumption) : void 0

        return [
            `Тип: ${getValueOrEmpty(getStockConsumptionTypeName(oldValue?.type))} → ${getValueOrEmpty(
                getStockConsumptionTypeName(newValue?.type)
            )}`,
            `ID поставщика: ${getValueOrEmpty(oldValue?.supplierId)} → ${getValueOrEmpty(newValue?.supplierId)}`,
            `ID заказа: ${getValueOrEmpty(oldValue?.orderId)} → ${getValueOrEmpty(newValue?.orderId)}`,
            `ID инвентаризации: ${getValueOrEmpty(oldValue?.inventoryId)} → ${getValueOrEmpty(newValue?.inventoryId)}`,
            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: StockConsumptionChange[]) =>
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

export default useStockConsumptionChangesTable
