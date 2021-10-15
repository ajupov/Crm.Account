import { useCallback, useContext } from 'react'

import OrdersActionsContext from '../../../contexts/OrdersActionsContext/OrdersActionsContext'
import OrdersContext from '../../../contexts/OrdersContext/OrdersContext'
import OrdersRoutes from '../../../routes/OrdersRoutes'
import { useHistory } from 'react-router'

interface UseOrderRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderRestore = (): UseOrderRestore => {
    const history = useHistory()
    const actionsState = useContext(OrdersActionsContext)
    const ordersState = useContext(OrdersContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(OrdersRoutes.Index)
        await ordersState.getPagedList()
    }, [actionsState, history, ordersState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderRestore
