import { useCallback, useContext } from 'react'

import LeadAttributesActionsContext from '../../../contexts/LeadAttributesActionsContext/LeadAttributesActionsContext'
import LeadAttributesContext from '../../../contexts/LeadAttributesContext/LeadAttributesContext'
import LeadAttributesRoutes from '../../../routes/LeadAttributesRoutes'
import { useHistory } from 'react-router'

interface UseLeadAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useLeadAttributeDelete = (): UseLeadAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(LeadAttributesActionsContext)
    const attributesState = useContext(LeadAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(LeadAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useLeadAttributeDelete
