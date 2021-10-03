import { useCallback, useContext } from 'react'

import OrderAttributesActionsContext from '../../../contexts/OrderAttributesActionsContext/OrderAttributesActionsContext'
import OrderAttributesContext from '../../../contexts/OrderAttributesContext/OrderAttributesContext'
import OrderAttributesRoutes from '../../../routes/OrderAttributesRoutes'
import { useHistory } from 'react-router'

interface UseOrderAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useOrderAttributeDelete = (): UseOrderAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(OrderAttributesActionsContext)
    const attributesState = useContext(OrderAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(OrderAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useOrderAttributeDelete
