import { useCallback, useContext } from 'react'

import ProductCategoryContext from '../../contexts/ProductCategoryContext'

interface UseProductCategoryRestore {
    isRestoring: boolean
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

    return { isRestoring: state.isRestoring, onClickConfirm, onClickCancel }
}

export default useProductCategoryRestore
