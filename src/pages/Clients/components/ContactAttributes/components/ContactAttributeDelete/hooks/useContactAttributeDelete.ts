import { useCallback, useContext } from 'react'

import ContactAttributesActionsContext from '../../../contexts/ContactAttributesActionsContext/ContactAttributesActionsContext'
import ContactAttributesContext from '../../../contexts/ContactAttributesContext/ContactAttributesContext'
import ContactAttributesRoutes from '../../../routes/ContactAttributesRoutes'
import { useHistory } from 'react-router'

interface UseContactAttributeDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useContactAttributeDelete = (): UseContactAttributeDelete => {
    const history = useHistory()
    const actionsState = useContext(ContactAttributesActionsContext)
    const attributesState = useContext(ContactAttributesContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(ContactAttributesRoutes.Index)
        await attributesState.getPagedList()
    }, [actionsState, history, attributesState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useContactAttributeDelete
