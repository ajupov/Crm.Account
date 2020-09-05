import { calculateOffset, calculatePage } from '../../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Product from '../../../../../../../../../../api/products/models/Product'
import ProductAttributeLink from '../../../../../../../../../../api/products/models/ProductAttributeLink'
import ProductCategoryLink from '../../../../../../../../../../api/products/models/ProductCategoryLink'
import ProductChange from '../../../../../../../../../../api/products/models/ProductChange'
import ProductChangesContext from '../../../../../contexts/ProductChangesContext/ProductChangesContext'
import { TableBodyRowProps } from '../../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../../../helpers/fileNameHelper'
import { getProductTypeName } from '../../../../../helpers/productTypeHelper'
import { getValueOrEmpty } from '../../../../../../../../../helpers/entityFieldValueHelper'
import { joinAttributes } from '../../../../../mappers/productAttributesMapper'
import { joinCategoryIds } from '../../../../../mappers/productCategoriesMapper'
import { toCurrency } from '../../../../../../../../../utils/currency/currencyUtils'

interface UseProductChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (products: ProductChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useProductChangesTable = (): UseProductChangesTableReturn => {
    const state = useContext(ProductChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений продукта')
        const headers = ['Идентификатор', 'Идентификатор продукта', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
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

    const mapCategories = useCallback((links?: ProductCategoryLink[]) => joinCategoryIds(links), [])

    const mapAttributes = useCallback((links?: ProductAttributeLink[]) => joinAttributes(links), [])

    const getChangeValue = useCallback(
        (change: ProductChange) => {
            const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as Product) : void 0
            const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as Product) : void 0

            return [
                `ID Родительского продукта: ${getValueOrEmpty(oldValue?.parentProductId)} → ${getValueOrEmpty(
                    newValue?.parentProductId
                )}`,
                `Тип: ${getValueOrEmpty(getProductTypeName(oldValue?.type))} → ${getValueOrEmpty(
                    getProductTypeName(newValue?.type)
                )}`,
                `ID Статуса: ${getValueOrEmpty(oldValue?.statusId)} → ${getValueOrEmpty(newValue?.statusId)}`,
                `ID Категорий: ${getValueOrEmpty(mapCategories(oldValue?.categoryLinks))} → ${getValueOrEmpty(
                    mapCategories(newValue?.categoryLinks)
                )}`,
                `Наименование: ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
                `Артикул: ${getValueOrEmpty(oldValue?.vendorCode)} → ${getValueOrEmpty(newValue?.vendorCode)}`,
                `Цена: ${getValueOrEmpty(toCurrency(oldValue?.price))} → ${getValueOrEmpty(
                    toCurrency(newValue?.price)
                )}`,
                `Черновик: ${getValueOrEmpty(oldValue?.isHidden)} → ${getValueOrEmpty(newValue?.isHidden)}`,
                `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`,
                `Атрибуты: ${getValueOrEmpty(mapAttributes(oldValue?.attributeLinks))} → ${getValueOrEmpty(
                    mapAttributes(newValue?.attributeLinks)
                )}`
            ]
        },
        [mapAttributes, mapCategories]
    )

    const map = useCallback(
        (changes: ProductChange[]) =>
            changes.map(
                change =>
                    ({
                        id: change.id,
                        cells: [
                            { value: getChangeName(change), textAlign: 'center' },
                            { value: getChangeValue(change), textAlign: 'left' },
                            {
                                value: change.createDateTime
                                    ? getDateTimeAsRecently(new Date(change.createDateTime))
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

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useProductChangesTable
