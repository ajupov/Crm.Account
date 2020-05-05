import { useCallback, useContext } from 'react'

import Product from '../../../../../../../../api/products/models/Product'
import ProductsActionsContext from '../../../contexts/ProductsActionsContext/ProductsActionsContext'
import { ProductsRoutes } from '../../../routes/ProductsRoutes'
import { ViewDataProps } from '../../../../../../../components/View/View'
import { getAttributeTypeName } from '../../../../../../../helpers/productTypeHelper'
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
    const state = useContext(ProductsActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${ProductsRoutes.Edit}/${id}`), [history])

    const onClickDelete = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsDeleting(true)
        },
        [state]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            state.setIds([id])
            state.setIsRestoring(true)
        },
        [state]
    )

    const onClickHistory = useCallback((id: string): void => history.push(`${ProductsRoutes.Changes}/${id}`), [
        history
    ])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const map = useCallback(
        (product: Product): ViewDataProps[] => [
            { label: 'Тип', value: getAttributeTypeName(product.type) },
            { label: 'Наименование', value: product.name },
            { label: 'Удален', value: product.isDeleted ? 'Да' : 'Нет' }
        ],
        []
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useProductView
