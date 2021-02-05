import { useCallback, useContext } from 'react'

import LeadsActionsContext from '../../../contexts/LeadsActionsContext/LeadsActionsContext'
import LeadsContext from '../../../contexts/LeadsContext/LeadsContext'
import LeadsRoutes from '../../../routes/LeadsRoutes'
import { useHistory } from 'react-router'

interface UseLeadDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useLeadDelete = (): UseLeadDelete => {
    const history = useHistory()
    const actionsState = useContext(LeadsActionsContext)
    const leadsState = useContext(LeadsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(LeadsRoutes.Index)
        await leadsState.getPagedList()
    }, [actionsState, history, leadsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useLeadDelete
