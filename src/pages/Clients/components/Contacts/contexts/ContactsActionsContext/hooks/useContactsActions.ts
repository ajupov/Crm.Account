import ContactsActionsState, { contactsActionsInitialState } from '../../../states/ContactsActionsState'
import { useCallback, useState } from 'react'

import ContactsClient from '../../../../../../../../api/contacts/clients/ContactsClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const contactsClient = new ContactsClient(HttpClientFactoryInstance.Api)

const useContactsActions = (): ContactsActionsState => {
    const [ids, setIds] = useState(contactsActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(contactsActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(contactsActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(contactsActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await contactsClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await contactsClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useContactsActions
