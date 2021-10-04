import CustomerAttributesActionsState, {
    customerAttributesActionsInitialState
} from '../../../states/CustomerAttributesActionsState'
import { useCallback, useState } from 'react'

import CustomerAttributesClient from '../../../../../../../api/customers/clients/CustomerAttributesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const customerAttributesClient = new CustomerAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerAttributesActions = (): CustomerAttributesActionsState => {
    const [ids, setIds] = useState(customerAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(customerAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(customerAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(customerAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await customerAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await customerAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useCustomerAttributesActions
