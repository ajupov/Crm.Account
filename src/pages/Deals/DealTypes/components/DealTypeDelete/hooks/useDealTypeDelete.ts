import { useCallback, useContext } from 'react'

import OrderTypesActionsContext from '../../../contexts/OrderTypesActionsContext/OrderTypesActionsContext'
import OrderTypesContext from '../../../contexts/OrderTypesContext/OrderTypesContext'
import OrderTypesRoutes from '../../../routes/OrderTypesRoutes'
import { useHistory } from 'react-router'

interface UseOrderTypeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderTypeDelete = (): UseOrderTypeDelete => {
    const history = useHistory()
    const actionsState = useContext(OrderTypesActionsContext)
    const typesState = useContext(OrderTypesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(OrderTypesRoutes.Index)
        await typesState.getPagedList()
    }, [actionsState, history, typesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderTypeDelete
