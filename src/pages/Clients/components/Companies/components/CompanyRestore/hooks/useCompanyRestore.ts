import { useCallback, useContext } from 'react'

import ContactsActionsContext from '../../../contexts/ContactsActionsContext/ContactsActionsContext'
import ContactsContext from '../../../contexts/ContactsContext/ContactsContext'
import ContactsRoutes from '../../../routes/ContactsRoutes'
import { useHistory } from 'react-router'

interface UseContactRestore {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useContactRestore = (): UseContactRestore => {
    const history = useHistory()
    const actionsState = useContext(ContactsActionsContext)
    const contactsState = useContext(ContactsContext)

    const onClickConfirm = useCallback(async () => {
        await actionsState.restore()
        actionsState.setIsRestoring(false)
        history.push(ContactsRoutes.Index)
        await contactsState.getPagedList()
    }, [actionsState, history, contactsState])

    const onClickCancel = useCallback(() => {
        actionsState.setIds([])
        actionsState.setIsRestoring(false)
    }, [actionsState])

    return { onClickConfirm, onClickCancel }
}

export default useContactRestore
