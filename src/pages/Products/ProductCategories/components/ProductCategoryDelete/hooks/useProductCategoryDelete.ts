import { useCallback, useContext } from 'react'

import ProductCategoriesActionsContext from '../../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContext'
import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import ProductCategoriesRoutes from '../../../routes/ProductCategoriesRoutes'
import { useHistory } from 'react-router'

interface UseProductCategoryDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryDelete = (): UseProductCategoryDelete => {
    const history = useHistory()
    const actionsState = useContext(ProductCategoriesActionsContext)
    const categoriesState = useContext(ProductCategoriesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(ProductCategoriesRoutes.Index)
        await categoriesState.getPagedList()
    }, [history, actionsState, categoriesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useProductCategoryDelete
