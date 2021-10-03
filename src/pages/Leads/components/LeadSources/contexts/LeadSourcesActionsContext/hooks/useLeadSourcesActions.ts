import LeadSourcesActionsState, { leadSourcesActionsInitialState } from '../../../states/LeadSourcesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import LeadSourcesClient from '../../../../../../../../api/customers/clients/LeadSourcesClient'

const leadSourcesClient = new LeadSourcesClient(HttpClientFactory.Api)

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
