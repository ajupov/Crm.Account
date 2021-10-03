import OrderStatusesActionsState, { orderStatusesActionsInitialState } from '../../../states/OrderStatusesActionsState'
import { useCallback, useState } from 'react'

import OrderStatusesClient from '../../../../../../../api/orders/clients/OrderStatusesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const orderStatusesClient = new OrderStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderStatusesActions = (): OrderStatusesActionsState => {
    const [ids, setIds] = useState(orderStatusesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(orderStatusesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(orderStatusesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(orderStatusesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await orderStatusesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await orderStatusesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useOrderStatusesActions
