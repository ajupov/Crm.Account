import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import Order from '../../../../../../api/orders/models/Order'
import OrdersClient from '../../../../../../api/orders/clients/OrdersClient'

const ordersClient = new OrdersClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseOrderLoadReturn {
    order?: Order
}

const useOrderLoad = (id?: string): UseOrderLoadReturn => {
    const [order, setOrder] = useState<Order>()

    const loadOrder = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await ordersClient.GetAsync(id)

        setOrder(response)
    }, [id])

    useEffect(() => {
        void loadOrder()
    }, [loadOrder])

    return { order }
}

export default useOrderLoad
