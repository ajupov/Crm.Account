import { useCallback, useContext } from 'react'

import Product from '../../../../../../../../api/products/models/Product'
import ProductContext from '../../../contexts/ProductContext/ProductContext'
import ProductsActionsContext from '../../../contexts/ProductsActionsContext/ProductsActionsContext'
import ProductsRoutes from '../../../routes/ProductsRoutes'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getProductTypeName } from '../../../helpers/productTypeHelper'
import { joinAttributes } from '../../../mappers/productAttributesMapper'
import { joinCategoryNames } from '../../../mappers/productCategoriesMapper'
import { toCurrency } from '../../../../../../../utils/currency/currencyUtils'
import { useHistory } from 'react-router'
import useProductName from '../../../hooks/useProductName'

interface UseProductViewReturn {
    map: (product: Product) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductView = (): UseProductViewReturn => {
    const history = useHistory()
    const productState = useContext(ProductContext)
    const actionsState = useContext(ProductsActionsContext)
    const { getProductName } = useProductName(productState.product.parentProductId)

    const onClickEdit = useCallback((id: string) => history.push(`${ProductsRoutes.Edit}/${id}`), [history])

    const onClickDelete = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsDeleting(true)
        },
        [actionsState]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsRestoring(true)
        },
        [actionsState]
    )

    const onClickHistory = useCallback((id: string) => history.push(`${ProductsRoutes.Changes}/${id}`), [history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapCategories = useCallback(() => joinCategoryNames(productState.categories), [productState.categories])

    const mapAttributes = useCallback(() => joinAttributes(productState.product.attributeLinks), [
        productState.product.attributeLinks
    ])

    const map = useCallback(
        (product: Product): ViewDataProps[] => [
            { label: 'Родительский продукт', value: getProductName() },
            { label: 'Тип', value: getProductTypeName(product.type) },
            { label: 'Статус', value: product.status?.name },
            { label: 'Категории', value: mapCategories() },
            { label: 'Наименование', value: product.name },
            { label: 'Артикул', value: product.vendorCode },
            { label: 'Цена', value: toCurrency(product.price) },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Черновик', value: product.isHidden ? 'Да' : 'Нет' },
            { label: 'Удален', value: product.isDeleted ? 'Да' : 'Нет' }
        ],
        [getProductName, mapAttributes, mapCategories]
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useProductView
