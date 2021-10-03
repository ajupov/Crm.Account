import DealStatusesActionsState, { dealStatusesActionsInitialState } from '../../../states/DealStatusesActionsState'
import { useCallback, useState } from 'react'

import DealStatusesClient from '../../../../../../../api/orders/clients/DealStatusesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const dealStatusesClient = new DealStatusesClient(HttpClientFactory.Api)

const useDealStatusesActions = (): DealStatusesActionsState => {
    const [ids, setIds] = useState(dealStatusesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(dealStatusesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(dealStatusesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(dealStatusesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await dealStatusesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await dealStatusesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useDealStatusesActions
