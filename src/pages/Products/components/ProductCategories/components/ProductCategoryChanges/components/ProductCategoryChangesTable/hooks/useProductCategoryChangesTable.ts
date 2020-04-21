import { calculateOffset, calculatePage } from '../../../../../../../../../helpers/paginationHelper'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import ProductCategory from '../../../../../../../../../../api/products/models/ProductCategory'
import ProductCategoryChange from '../../../../../../../../../../api/products/models/ProductCategoryChange'
import ProductCategoryChangesContext from '../../../../../contexts/ProductCategoryChangesContext/ProductCategoryChangesContext'
import { TableBodyRowProps } from '../../../../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../../components/Table/TableHeader'
import { getValueOrEmpty } from '../../../../../../../../../helpers/valueHelper'
import { toLocaleDateTime } from '../../../../../../../../../utils/dateTime/dateTimeUtils'

interface UseProductCategoryChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (categories: ProductCategoryChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

const useProductCategoryChangesTable = (): UseProductCategoryChangesTableReturn => {
    const state = useContext(ProductCategoryChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = 'История'
        const headers = ['Идентификатор', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number): void =>
            state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: ProductCategoryChange) => {
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

    const getChangeValue = useCallback((change: ProductCategoryChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as ProductCategory) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as ProductCategory) : void 0

        return [
            `Наименование: \t ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: ProductCategoryChange[]) =>
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

export default useProductCategoryChangesTable
