import OrdersActionsState, { ordersActionsInitialState } from '../../../states/OrdersActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrdersClient from '../../../../../../../api/orders/clients/OrdersClient'

const ordersClient = new OrdersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrdersActions = (): OrdersActionsState => {
    const [ids, setIds] = useState(ordersActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(ordersActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(ordersActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(ordersActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await ordersClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await ordersClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useOrdersActions
