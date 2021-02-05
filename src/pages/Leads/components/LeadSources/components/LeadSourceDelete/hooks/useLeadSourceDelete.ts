import { useCallback, useContext } from 'react'

import LeadSourcesActionsContext from '../../../contexts/LeadSourcesActionsContext/LeadSourcesActionsContext'
import LeadSourcesContext from '../../../contexts/LeadSourcesContext/LeadSourcesContext'
import LeadSourcesRoutes from '../../../routes/LeadSourcesRoutes'
import { useHistory } from 'react-router'

interface UseLeadSourceDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useLeadSourceDelete = (): UseLeadSourceDelete => {
    const history = useHistory()
    const actionsState = useContext(LeadSourcesActionsContext)
    const sourcesState = useContext(LeadSourcesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(LeadSourcesRoutes.Index)
        await sourcesState.getPagedList()
    }, [actionsState, history, sourcesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useLeadSourceDelete
