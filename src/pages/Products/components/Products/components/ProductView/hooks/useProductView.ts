import { useCallback, useContext } from 'react'

import Product from '../../../../../../../../api/products/models/Product'
import ProductContext from '../../../contexts/ProductContext/ProductContext'
import ProductsActionsContext from '../../../contexts/ProductsActionsContext/ProductsActionsContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getProductTypeName } from '../../../helpers/productTypeHelper'
import { joinAttributes } from '../../../mappers/productAttributesMapper'
import { joinCategoryNames } from '../../../mappers/productCategoriesMapper'
import { toCurrency } from '../../../../../../../utils/currency/currencyUtils'
import { useHistory } from 'react-router'
import useProduct from '../../../hooks/load/useProduct'

interface UseProductViewReturn {
    map: (product: Product) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductView = (): UseProductViewReturn => {
    const history = useHistory()
    const productState = useContext(ProductContext)
    const actionsState = useContext(ProductsActionsContext)
    const { productName } = useProduct(productState.product.parentProductId)

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

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapCategories = useCallback(() => joinCategoryNames(productState.categories), [productState.categories])

    const mapAttributes = useCallback(() => joinAttributes(productState.product.attributeLinks), [
        productState.product.attributeLinks
    ])

    const map = useCallback(
        (product: Product): ViewDataProps[] => [
            { label: 'Родительский продукт', value: productName },
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
        [mapAttributes, mapCategories, productName]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useProductView
