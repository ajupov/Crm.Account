import LeadAttributesActionsState, {
    leadAttributesActionsInitialState
} from '../../../states/LeadAttributesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadAttributesClient from '../../../../../../../../api/leads/clients/LeadAttributesClient'

const leadAttributesClient = new LeadAttributesClient(HttpClientFactoryInstance.Api)

const useLeadAttributesActions = (): LeadAttributesActionsState => {
    const [ids, setIds] = useState(leadAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(leadAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(leadAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(leadAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await leadAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await leadAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useLeadAttributesActions
