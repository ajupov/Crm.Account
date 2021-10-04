import { useCallback, useContext } from 'react'

import CustomersActionsContext from '../../../contexts/CustomersActionsContext/CustomersActionsContext'
import CustomersContext from '../../../contexts/CustomersContext/CustomersContext'
import CustomersRoutes from '../../../routes/CustomersRoutes'
import { useHistory } from 'react-router'

interface UseCustomerRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCustomerRestore = (): UseCustomerRestore => {
    const history = useHistory()
    const actionsState = useContext(CustomersActionsContext)
    const customersState = useContext(CustomersContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(CustomersRoutes.Index)
        await customersState.getPagedList()
    }, [actionsState, history, customersState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCustomerRestore
