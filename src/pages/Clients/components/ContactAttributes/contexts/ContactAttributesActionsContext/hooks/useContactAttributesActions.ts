import ContactAttributesActionsState, {
    contactAttributesActionsInitialState
} from '../../../states/ContactAttributesActionsState'
import { useCallback, useState } from 'react'

import ContactAttributesClient from '../../../../../../../../api/contacts/clients/ContactAttributesClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const contactAttributesClient = new ContactAttributesClient(HttpClientFactoryInstance.Api)

const useContactAttributesActions = (): ContactAttributesActionsState => {
    const [ids, setIds] = useState(contactAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(contactAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(contactAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(contactAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await contactAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await contactAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useContactAttributesActions
