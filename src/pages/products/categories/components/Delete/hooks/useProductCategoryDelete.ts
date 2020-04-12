import { useCallback, useContext } from 'react'

import ProductCategoryContext from '../../../contexts/ProductCategoryContext'

interface UseProductCategoryDelete {
    isDeleting: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCategoryDelete = (): UseProductCategoryDelete => {
    const state = useContext(ProductCategoryContext)

    const onClickConfirm = useCallback(() => {
        state.delete()
        state.setIsDeleting(false)
    }, [state])

    const onClickCancel = useCallback(() => {
        state.setIds([])
        state.setIsDeleting(false)
    }, [state])

    return { isDeleting: state.isDeleting, onClickConfirm, onClickCancel }
}

export default useProductCategoryDelete
