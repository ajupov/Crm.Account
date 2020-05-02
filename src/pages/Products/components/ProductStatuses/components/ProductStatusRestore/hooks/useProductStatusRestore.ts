import { useCallback, useContext } from 'react'

import ProductStatusesActionsContext from '../../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import { ProductStatusesRoutes } from '../../../routes/ProductStatusesRoutes'
import { useHistory } from 'react-router'

interface UseProductStatusRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductStatusRestore = (): UseProductStatusRestore => {
    const history = useHistory()
    const state = useContext(ProductStatusesActionsContext)

    const onClickConfirm = useCallback(async () => {
        await state.restore()
        state.setIsRestoring(false)
        history.push(ProductStatusesRoutes.Index)
    }, [history, state])

    const onClickCancel = useCallback(() => {
        state.setIds([])
        state.setIsRestoring(false)
    }, [state])

    return { onClickConfirm, onClickCancel }
}

export default useProductStatusRestore
