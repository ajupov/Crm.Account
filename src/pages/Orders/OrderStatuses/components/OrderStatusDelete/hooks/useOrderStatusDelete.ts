import { useCallback, useContext } from 'react'

import OrderStatusesActionsContext from '../../../contexts/OrderStatusesActionsContext/OrderStatusesActionsContext'
import OrderStatusesContext from '../../../contexts/OrderStatusesContext/OrderStatusesContext'
import OrderStatusesRoutes from '../../../routes/OrderStatusesRoutes'
import { useHistory } from 'react-router'

interface UseOrderStatusDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderStatusDelete = (): UseOrderStatusDelete => {
    const history = useHistory()
    const actionsState = useContext(OrderStatusesActionsContext)
    const statusesState = useContext(OrderStatusesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(OrderStatusesRoutes.Index)
        await statusesState.getPagedList()
    }, [actionsState, history, statusesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderStatusDelete
