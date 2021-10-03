import OrderAttributesActionsState, {
    orderAttributesActionsInitialState
} from '../../../states/OrderAttributesActionsState'
import { useCallback, useState } from 'react'

import OrderAttributesClient from '../../../../../../../api/orders/clients/OrderAttributesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const orderAttributesClient = new OrderAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderAttributesActions = (): OrderAttributesActionsState => {
    const [ids, setIds] = useState(orderAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(orderAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(orderAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(orderAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await orderAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await orderAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useOrderAttributesActions
