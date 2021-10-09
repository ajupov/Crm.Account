import { useCallback, useContext } from 'react'

import ProductStatusesActionsContext from '../../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContext'
import ProductStatusesContext from '../../../contexts/ProductStatusesContext/ProductStatusesContext'
import ProductStatusesRoutes from '../../../routes/ProductStatusesRoutes'
import { useHistory } from 'react-router'

interface UseProductStatusRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductStatusRestore = (): UseProductStatusRestore => {
    const history = useHistory()
    const actionsState = useContext(ProductStatusesActionsContext)
    const statusesState = useContext(ProductStatusesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(ProductStatusesRoutes.Index)
        await statusesState.getPagedList()
    }, [actionsState, history, statusesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useProductStatusRestore
