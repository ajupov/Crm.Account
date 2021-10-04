import { useCallback, useContext } from 'react'

import CustomerAttributesActionsContext from '../../../contexts/CustomerAttributesActionsContext/CustomerAttributesActionsContext'
import CustomerAttributesContext from '../../../contexts/CustomerAttributesContext/CustomerAttributesContext'
import CustomerAttributesRoutes from '../../../routes/CustomerAttributesRoutes'
import { useHistory } from 'react-router'

interface UseCustomerAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCustomerAttributeDelete = (): UseCustomerAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(CustomerAttributesActionsContext)
    const attributesState = useContext(CustomerAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(CustomerAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCustomerAttributeDelete
