import { useCallback, useContext } from 'react'

import ProductStatusesActionsContext from '../../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import { ProductStatusesRoutes } from '../../../routes/ProductStatusesRoutes'
import { useHistory } from 'react-router'

interface UseProductStatusDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductStatusDelete = (): UseProductStatusDelete => {
    const history = useHistory()
    const state = useContext(ProductStatusesActionsContext)

    const onClickConfirm = useCallback(async () => {
        await state.delete()
        state.setIsDeleting(false)
        history.push(ProductStatusesRoutes.Index)
    }, [history, state])

    const onClickCancel = useCallback(() => {
        state.setIds([])
        state.setIsDeleting(false)
    }, [state])

    return { onClickConfirm, onClickCancel }
}

export default useProductStatusDelete
