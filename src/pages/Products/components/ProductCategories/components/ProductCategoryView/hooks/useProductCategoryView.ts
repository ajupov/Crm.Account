import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import { useHistory } from 'react-router'

interface UseProductCategoryViewReturn {
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

const useProductCategoryView = (): UseProductCategoryViewReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoriesContext)

    const onClickEdit = useCallback((id: string) => history.push(`/products/categories/edit/${id}`), [history])

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

    const onClickCancel = useCallback((): void => history.push('/products/categories'), [history])

    return { onClickEdit, onClickDelete, onClickRestore, onClickCancel }
}

export default useProductCategoryView
