import { useCallback, useContext } from 'react'

import OrderStatusesActionsContext from '../../../contexts/OrderStatusesActionsContext/OrderStatusesActionsContext'
import OrderStatusesContext from '../../../contexts/OrderStatusesContext/OrderStatusesContext'
import OrderStatusesRoutes from '../../../routes/OrderStatusesRoutes'
import { useHistory } from 'react-router'

interface UseOrderStatusRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderStatusRestore = (): UseOrderStatusRestore => {
    const history = useHistory()
    const actionsState = useContext(OrderStatusesActionsContext)
    const statusesState = useContext(OrderStatusesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(OrderStatusesRoutes.Index)
        await statusesState.getPagedList()
    }, [actionsState, history, statusesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderStatusRestore
