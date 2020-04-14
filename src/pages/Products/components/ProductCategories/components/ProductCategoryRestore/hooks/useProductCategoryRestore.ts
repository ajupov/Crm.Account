import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import { ProductCategoriesRoutes } from '../../../routes/ProductCategoriesRoutes'
import { useHistory } from 'react-router'

interface UseProductCategoryRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryRestore = (): UseProductCategoryRestore => {
    const history = useHistory()
    const state = useContext(ProductCategoriesContext)

    const onClickConfirm = useCallback(async () => {
        await state.restore()
        state.setIsRestoring(false)
        history.push(ProductCategoriesRoutes.Index)
    }, [history, state])

    const onClickCancel = useCallback(() => {
        state.setIds([])
        state.setIsRestoring(false)
    }, [state])

    return { onClickConfirm, onClickCancel }
}

export default useProductCategoryRestore
