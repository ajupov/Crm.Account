import { useCallback, useContext } from 'react'

import ProductCategoryContext from '../../../contexts/ProductCategoryContext/ProductCategoryContext'

interface UseProductCategoryRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryRestore = (): UseProductCategoryRestore => {
    const state = useContext(ProductCategoryContext)

    const onClickConfirm = useCallback(() => {
        state.restore()
        state.setIsRestoring(false)
    }, [state])

    const onClickCancel = useCallback(() => {
        state.setIds([])
        state.setIsRestoring(false)
    }, [state])

    return { onClickConfirm, onClickCancel }
}

export default useProductCategoryRestore
