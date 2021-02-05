import { useCallback, useContext } from 'react'

import LeadAttributesActionsContext from '../../../contexts/LeadAttributesActionsContext/LeadAttributesActionsContext'
import LeadAttributesContext from '../../../contexts/LeadAttributesContext/LeadAttributesContext'
import LeadAttributesRoutes from '../../../routes/LeadAttributesRoutes'
import { useHistory } from 'react-router'

interface UseLeadAttributeRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useLeadAttributeRestore = (): UseLeadAttributeRestore => {
    const history = useHistory()
    const actionsState = useContext(LeadAttributesActionsContext)
    const attributesState = useContext(LeadAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(LeadAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useLeadAttributeRestore
