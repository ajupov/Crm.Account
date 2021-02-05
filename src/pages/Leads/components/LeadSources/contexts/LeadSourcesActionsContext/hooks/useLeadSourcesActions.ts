import LeadSourcesActionsState, { leadSourcesActionsInitialState } from '../../../states/LeadSourcesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadSourcesClient from '../../../../../../../../api/leads/clients/LeadSourcesClient'

const leadSourcesClient = new LeadSourcesClient(HttpClientFactoryInstance.Api)

const useLeadSourcesActions = (): LeadSourcesActionsState => {
    const [ids, setIds] = useState(leadSourcesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(leadSourcesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(leadSourcesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(leadSourcesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await leadSourcesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await leadSourcesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useLeadSourcesActions
