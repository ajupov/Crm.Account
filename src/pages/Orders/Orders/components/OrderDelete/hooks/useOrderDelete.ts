import { useCallback, useContext } from 'react'

import OrdersActionsContext from '../../../contexts/OrdersActionsContext/OrdersActionsContext'
import OrdersContext from '../../../contexts/OrdersContext/OrdersContext'
import OrdersRoutes from '../../../routes/OrdersRoutes'
import { useHistory } from 'react-router'

interface UseOrderDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderDelete = (): UseOrderDelete => {
    const history = useHistory()
    const actionsState = useContext(OrdersActionsContext)
    const customersState = useContext(OrdersContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(OrdersRoutes.Index)
        await customersState.getPagedList()
    }, [actionsState, history, customersState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderDelete
