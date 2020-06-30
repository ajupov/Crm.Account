import { useCallback, useContext } from 'react'

import ContactContext from '../../../contexts/ContactContext/ContactContext'
import ContactsActionsContext from '../../../contexts/ContactsActionsContext/ContactsActionsContext'
import { ContactsRoutes } from '../../../routes/ContactsRoutes'
import Product from '../../../../../../../../api/products/models/Product'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getProductTypeName } from '../../../helpers/productTypeHelper'
import { joinCategoryNames } from '../../../mappers/contactCategoriesMapper'
import { toCurrency } from '../../../../../../../utils/currency/currencyUtils'
import useContactsSelectOptions from '../../../hooks/useContactsSelectOptions'
import { useHistory } from 'react-router'

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
    const { getAllProducts } = useContactsSelectOptions()
    const productState = useContext(ContactContext)
    const actionsState = useContext(ContactsActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${ContactsRoutes.Edit}/${id}`), [history])

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

    const onClickHistory = useCallback((id: string) => history.push(`${ContactsRoutes.Changes}/${id}`), [history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapCategories = useCallback(() => joinCategoryNames(productState.categories), [productState.categories])

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
            {
                label: 'Родительский продукт',
                value: getAllProducts().find(x => x.value === product.parentProductId)?.text
            },
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
        [getAllProducts, mapAttributes, mapCategories]
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useProductView
