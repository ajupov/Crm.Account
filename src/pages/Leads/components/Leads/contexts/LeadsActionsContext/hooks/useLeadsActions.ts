import LeadsActionsState, { leadsActionsInitialState } from '../../../states/LeadsActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadsClient from '../../../../../../../../api/leads/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactoryInstance.Api)

const useLeadsActions = (): LeadsActionsState => {
    const [ids, setIds] = useState(leadsActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(leadsActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(leadsActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(leadsActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await leadsClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await leadsClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useLeadsActions
