import DealTypesActionsState, { dealTypesActionsInitialState } from '../../../states/DealTypesActionsState'
import { useCallback, useState } from 'react'

import DealTypesClient from '../../../../../../../api/deals/clients/DealTypesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const dealTypesClient = new DealTypesClient(HttpClientFactoryInstance.Api)

const useDealTypesActions = (): DealTypesActionsState => {
    const [ids, setIds] = useState(dealTypesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(dealTypesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(dealTypesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(dealTypesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await dealTypesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await dealTypesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useDealTypesActions
