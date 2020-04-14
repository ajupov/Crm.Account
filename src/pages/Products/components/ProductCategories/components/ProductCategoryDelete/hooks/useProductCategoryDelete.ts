import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import { useHistory } from 'react-router'

interface UseProductCategoryDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryDelete = (): UseProductCategoryDelete => {
    const history = useHistory()
    const state = useContext(ProductCategoriesContext)

    const onClickConfirm = useCallback(async () => {
        await state.delete()
        state.setIsDeleting(false)
        history.push('/products/categories')
    }, [history, state])

    const onClickCancel = useCallback(() => {
        state.setIds([])
        state.setIsDeleting(false)
    }, [state])

    return { onClickConfirm, onClickCancel }
}

export default useProductCategoryDelete
