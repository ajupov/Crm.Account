import OrdersState, { ordersInitialState } from '../../../states/OrdersState'
import { useCallback, useEffect, useState } from 'react'

import OrdersClient from '../../../../../../../api/orders/clients/OrdersClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const ordersClient = new OrdersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrders = (): OrdersState => {
    const MaxLimit = 2147483647

    const [isLoading, setIsLoading] = useState(ordersInitialState.isLoading)
    const [orders, setOrders] = useState(ordersInitialState.orders)

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await ordersClient.GetPagedListAsync({
            isDeleted: false,
            limit: MaxLimit,
            offset: 0,
            sortBy: 'CreateDateTime',
            orderBy: 'desc'
        })

        setOrders(response.orders ?? [])

        setIsLoading(false)
    }, [])

    useEffect(() => {
        void getAll()
    }, [getAll])

    return { isLoading, orders, getAll }
}

export default useOrders
