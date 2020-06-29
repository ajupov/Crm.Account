import { useCallback, useContext } from 'react'

import ProductCategoriesActionsContext from '../../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContext'
import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import { ProductCategoriesRoutes } from '../../../routes/ProductCategoriesRoutes'
import { useHistory } from 'react-router'

interface UseProductCategoryRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryRestore = (): UseProductCategoryRestore => {
    const history = useHistory()
    const actionsState = useContext(ProductCategoriesActionsContext)
    const categoriesState = useContext(ProductCategoriesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(ProductCategoriesRoutes.Index)
        await categoriesState.getPagedList()
    }, [actionsState, history, categoriesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useProductCategoryRestore
