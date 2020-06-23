import { calculateOffset, calculatePage } from '../../../../../../../../../helpers/paginationHelper'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Product from '../../../../../../../../../../api/products/models/Product'
import ProductCategoryLink from '../../../../../../../../../../api/products/models/ProductCategoryLink'
import ProductChange from '../../../../../../../../../../api/products/models/ProductChange'
import ProductChangesContext from '../../../../../contexts/ProductChangesContext/ProductChangesContext'
import { TableBodyRowProps } from '../../../../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../../components/Table/TableHeader'
import { getAttributeTypeName } from '../../../../../../../../../helpers/productTypeHelper'
import { getValueOrEmpty } from '../../../../../../../../../helpers/valueHelper'
import { getWithCurrency } from '../../../../../../../../../helpers/currencyHelper'
import { joinCategoryIds } from '../../../../../mappers/productCategoriesMapper'
import { toLocaleDateTime } from '../../../../../../../../../utils/dateTime/dateTimeUtils'

interface UseProductChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (products: ProductChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

const useProductChangesTable = (): UseProductChangesTableReturn => {
    const state = useContext(ProductChangesContext)

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

    const getChangeName = useCallback((change: ProductChange) => {
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

    const mapCategories = useCallback((categoryLinks?: ProductCategoryLink[]) => joinCategoryIds(categoryLinks), [])

    const getChangeValue = useCallback((change: ProductChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as Product) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as Product) : void 0

        return [
            `ID Родительского продукта: ${getValueOrEmpty(oldValue?.parentProductId)} → ${getValueOrEmpty(
                newValue?.parentProductId
            )}`,
            `Тип: \t ${getValueOrEmpty(getAttributeTypeName(oldValue?.type))} → ${getValueOrEmpty(
                getAttributeTypeName(newValue?.type)
            )}`,
            `ID статуса: \t ${getValueOrEmpty(oldValue?.statusId)} → ${getValueOrEmpty(newValue?.statusId)}`,
            `ID категорий: \t ${getValueOrEmpty(mapCategories(oldValue?.categoryLinks))} → ${getValueOrEmpty(
                mapCategories(newValue?.categoryLinks)
            )}`,
            `Наименование: \t ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
            `Артикул: \t ${getValueOrEmpty(oldValue?.vendorCode)} → ${getValueOrEmpty(newValue?.vendorCode)}`,

            `Цена: \t ${getValueOrEmpty(getWithCurrency(oldValue?.price))} → ${getValueOrEmpty(
                getWithCurrency(newValue?.price)
            )}`,

            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: ProductChange[]) =>
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

export default useProductChangesTable
