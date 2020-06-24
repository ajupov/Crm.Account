import { calculateOffset, calculatePage } from '../../../../../../../../../helpers/paginationHelper'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import ProductStatus from '../../../../../../../../../../api/products/models/ProductStatus'
import ProductStatusChange from '../../../../../../../../../../api/products/models/ProductStatusChange'
import ProductStatusChangesContext from '../../../../../contexts/ProductStatusChangesContext/ProductStatusChangesContext'
import { TableBodyRowProps } from '../../../../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../../components/Table/TableHeader'
import { getValueOrEmpty } from '../../../../../../../../../helpers/valueHelper'
import { toLocaleDateTime } from '../../../../../../../../../utils/dateTime/dateTimeUtils'

interface UseProductStatusChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (statuses: ProductStatusChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

const useProductStatusChangesTable = (): UseProductStatusChangesTableReturn => {
    const state = useContext(ProductStatusChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = 'История изменений'
        const headers = ['Идентификатор', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number): void =>
            state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: ProductStatusChange) => {
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

    const getChangeValue = useCallback((change: ProductStatusChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as ProductStatus) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as ProductStatus) : void 0

        return [
            `Наименование: ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: ProductStatusChange[]) =>
            changes.map(
                change =>
                    ({
                        id: change.id,
                        cells: [
                            { value: getChangeName(change), textAlign: 'center' },
                            { value: getChangeValue(change), textAlign: 'left' },
                            { value: toLocaleDateTime(change.createDateTime), textAlign: 'center' }
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

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useProductStatusChangesTable
