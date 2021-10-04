import { useCallback, useContext } from 'react'

import CustomerSourcesActionsContext from '../../../contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContext'
import CustomerSourcesContext from '../../../contexts/CustomerSourcesContext/CustomerSourcesContext'
import CustomerSourcesRoutes from '../../../routes/CustomerSourcesRoutes'
import { useHistory } from 'react-router'

interface UseCustomerSourceDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useCustomerSourceDelete = (): UseCustomerSourceDelete => {
    const history = useHistory()
    const actionsState = useContext(CustomerSourcesActionsContext)
    const sourcesState = useContext(CustomerSourcesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(CustomerSourcesRoutes.Index)
        await sourcesState.getPagedList()
    }, [actionsState, history, sourcesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useCustomerSourceDelete
