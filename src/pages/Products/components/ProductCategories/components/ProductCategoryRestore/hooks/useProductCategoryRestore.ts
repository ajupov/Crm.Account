import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
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

        history.push('/products/categories')
    }, [history, state])

    const onClickCancel = useCallback(() => {
        state.setIds([])

        state.setIsRestoring(false)
    }, [state])

    return { onClickConfirm, onClickCancel }
}

export default useProductCategoryRestore
