import CustomersActionsState, { customersActionsInitialState } from '../../../states/CustomersActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import CustomersClient from '../../../../../../../../api/customers/clients/CustomersClient'

const customersClient = new CustomersClient(HttpClientFactory.Api)

const useCustomersActions = (): CustomersActionsState => {
    const [ids, setIds] = useState(customersActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(customersActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(customersActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(customersActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await customersClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await customersClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useCustomersActions
