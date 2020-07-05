import { useCallback, useContext } from 'react'

import ContactsActionsContext from '../../../contexts/ContactsActionsContext/ContactsActionsContext'
import ContactsContext from '../../../contexts/ContactsContext/ContactsContext'
import ContactsRoutes from '../../../routes/ContactsRoutes'
import { useHistory } from 'react-router'

interface UseContactDelete {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useContactDelete = (): UseContactDelete => {
    const history = useHistory()
    const actionsState = useContext(ContactsActionsContext)
    const contactsState = useContext(ContactsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.delete()
        actionsState.setIsDeleting(false)
        history.push(ContactsRoutes.Index)
        await contactsState.getPagedList()
    }, [actionsState, history, contactsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsDeleting(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useContactDelete
