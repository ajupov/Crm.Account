import { useCallback, useContext } from 'react'

import CustomerAttributesActionsContext from '../../../contexts/CustomerAttributesActionsContext/CustomerAttributesActionsContext'
import CustomerAttributesContext from '../../../contexts/CustomerAttributesContext/CustomerAttributesContext'
import CustomerAttributesRoutes from '../../../routes/CustomerAttributesRoutes'
import { useHistory } from 'react-router'

interface UseCustomerAttributeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCustomerAttributeRestore = (): UseCustomerAttributeRestore => {
    const history = useHistory()
    const actionsState = useContext(CustomerAttributesActionsContext)
    const attributesState = useContext(CustomerAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(CustomerAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCustomerAttributeRestore
