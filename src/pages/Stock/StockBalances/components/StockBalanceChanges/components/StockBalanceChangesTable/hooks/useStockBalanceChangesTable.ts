import { addUtcKind, getDateTimeAsRecently } from '../../../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import StockBalance from '../../../../../../../../../api/stock/models/StockBalance'
import StockBalanceChange from '../../../../../../../../../api/stock/models/StockBalanceChange'
import StockBalanceChangesContext from '../../../../../contexts/StockBalanceChangesContext/StockBalanceChangesContext'
import { TableBodyRowProps } from '../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../helpers/entityFieldValueHelper'

interface UseStockBalanceChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (stockBalances: StockBalanceChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useStockBalanceChangesTable = (): UseStockBalanceChangesTableReturn => {
    const state = useContext(StockBalanceChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений баланса')
        const headers = ['Идентификатор', 'Идентификатор баланса', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: StockBalanceChange) => {
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

    const getChangeValue = useCallback((change: StockBalanceChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as StockBalance) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as StockBalance) : void 0

        return [
            `Склад: ${getValueOrEmpty(oldValue?.room?.name)} → ${getValueOrEmpty(newValue?.room?.name)}`,
            `ID продукта: ${getValueOrEmpty(oldValue?.productId)} → ${getValueOrEmpty(newValue?.productId)}`,
            `Количество: ${getValueOrEmpty(oldValue?.count)} → ${getValueOrEmpty(newValue?.count)}`,
            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: StockBalanceChange[]) =>
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

export default useStockBalanceChangesTable
