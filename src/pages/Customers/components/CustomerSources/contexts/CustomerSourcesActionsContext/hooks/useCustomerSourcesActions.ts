import CustomerSourcesActionsState, {
    customerSourcesActionsInitialState
} from '../../../states/CustomerSourcesActionsState'
import { useCallback, useState } from 'react'

import CustomerSourcesClient from '../../../../../../../../api/customers/clients/CustomerSourcesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'

const customerSourcesClient = new CustomerSourcesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerSourcesActions = (): CustomerSourcesActionsState => {
    const [ids, setIds] = useState(customerSourcesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(customerSourcesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(customerSourcesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(customerSourcesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await customerSourcesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await customerSourcesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useCustomerSourcesActions
