import DealAttributesActionsState, {
    dealAttributesActionsInitialState
} from '../../../states/DealAttributesActionsState'
import { useCallback, useState } from 'react'

import DealAttributesClient from '../../../../../../../api/deals/clients/DealAttributesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const dealAttributesClient = new DealAttributesClient(HttpClientFactoryInstance.Api)

const useDealAttributesActions = (): DealAttributesActionsState => {
    const [ids, setIds] = useState(dealAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(dealAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(dealAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(dealAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await dealAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await dealAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useDealAttributesActions
