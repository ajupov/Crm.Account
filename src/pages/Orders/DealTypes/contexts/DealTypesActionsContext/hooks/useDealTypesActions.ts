import OrderTypesActionsState, { orderTypesActionsInitialState } from '../../../states/OrderTypesActionsState'
import { useCallback, useState } from 'react'

import OrderTypesClient from '../../../../../../../api/orders/clients/OrderTypesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const orderTypesClient = new OrderTypesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderTypesActions = (): OrderTypesActionsState => {
    const [ids, setIds] = useState(orderTypesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(orderTypesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(orderTypesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(orderTypesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await orderTypesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await orderTypesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useOrderTypesActions
