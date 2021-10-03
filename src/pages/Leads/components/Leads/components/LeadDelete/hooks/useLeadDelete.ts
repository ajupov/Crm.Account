import { useCallback, useContext } from 'react'

import CustomersActionsContext from '../../../contexts/CustomersActionsContext/CustomersActionsContext'
import CustomersContext from '../../../contexts/CustomersContext/CustomersContext'
import CustomersRoutes from '../../../routes/CustomersRoutes'
import { useHistory } from 'react-router'

interface UseCustomerDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCustomerDelete = (): UseCustomerDelete => {
    const history = useHistory()
    const actionsState = useContext(CustomersActionsContext)
    const customersState = useContext(CustomersContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(CustomersRoutes.Index)
        await customersState.getPagedList()
    }, [actionsState, history, customersState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCustomerDelete
