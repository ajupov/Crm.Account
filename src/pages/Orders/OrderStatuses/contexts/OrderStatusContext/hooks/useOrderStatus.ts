import { OrderStatusState, orderStatusInitialState } from '../../../states/OrderStatusState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderStatusesClient from '../../../../../../../api/orders/clients/OrderStatusesClient'
import { useParams } from 'react-router'

const orderStatusesClient = new OrderStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderStatus = (): OrderStatusState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(orderStatusInitialState.isLoading)
    const [status, setStatus] = useState(orderStatusInitialState.status)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderStatusesClient.GetAsync(id)

        setStatus(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await orderStatusesClient.CreateAsync(status)

        setIsLoading(false)
    }, [status])

    const update = useCallback(async () => {
        setIsLoading(true)

        await orderStatusesClient.UpdateAsync(status)

        setIsLoading(false)
    }, [status])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, status, setStatus, create, update }
}

export default useOrderStatus
