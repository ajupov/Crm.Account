import { useCallback, useContext } from 'react'

import ProductCategoriesActionsContext from '../../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContext'
import { ProductCategoriesRoutes } from '../../../routes/ProductCategoriesRoutes'
import { useHistory } from 'react-router'

interface UseProductCategoryDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryDelete = (): UseProductCategoryDelete => {
    const history = useHistory()
    const state = useContext(ProductCategoriesActionsContext)

    const onClickConfirm = useCallback(async () => {
        await state.delete()
        state.setIsDeleting(false)
        history.push(ProductCategoriesRoutes.Index)
    }, [history, state])

    const onClickCancel = useCallback(() => {
        state.setIds([])
        state.setIsDeleting(false)
    }, [state])

    return { onClickConfirm, onClickCancel }
}

export default useProductCategoryDelete
