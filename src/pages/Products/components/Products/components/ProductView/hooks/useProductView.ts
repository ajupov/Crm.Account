import { useCallback, useContext } from 'react'

import Product from '../../../../../../../../api/products/models/Product'
import ProductContext from '../../../contexts/ProductContext/ProductContext'
import ProductsActionsContext from '../../../contexts/ProductsActionsContext/ProductsActionsContext'
import { ProductsRoutes } from '../../../routes/ProductsRoutes'
import { ViewDataProps } from '../../../../../../../components/View/View'
import { getAttributeTypeName } from '../../../../../../../helpers/productTypeHelper'
import { getWithCurrency } from '../../../../../../../helpers/currencyHelper'
import { useHistory } from 'react-router'

interface UseProductViewReturn {
    map: (product: Product) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
    onClickCancel: () => void
}

const useProductView = (): UseProductViewReturn => {
    const history = useHistory()
    const productState = useContext(ProductContext)
    const actionsState = useContext(ProductsActionsContext)

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

    const onClickHistory = useCallback((id: string): void => history.push(`${ProductsRoutes.Changes}/${id}`), [history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const mapCategories = useCallback(() => productState.categories.map(x => x.name).join(', '), [
        productState.categories
    ])

    const mapAttributes = useCallback(
        () =>
            productState.attributes
                .map(x => {
                    const value = productState.product.attributeLinks?.find(l => l.productAttributeId === x.id)?.value

                    return x.key + (value ? ': ' + value : '')
                })
                .join(', '),
        [productState.attributes, productState.product.attributeLinks]
    )

    const map = useCallback(
        (product: Product): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(product.type) },
            { label: 'Статус', value: product.status?.name },
            { label: 'Категории', value: mapCategories() },
            { label: 'Наименование', value: product.name },
            { label: 'Артикул', value: product.vendorCode },
            { label: 'Цена', value: getWithCurrency(product.price) },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Черновик', value: product.isHidden ? 'Да' : 'Нет' },
            { label: 'Удален', value: product.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapAttributes, mapCategories]
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useProductView
