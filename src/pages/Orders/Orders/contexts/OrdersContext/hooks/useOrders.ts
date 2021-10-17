import OrdersState, { conactsInitialState } from '../../../states/OrdersState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrdersClient from '../../../../../../../api/orders/clients/OrdersClient'

const ordersClient = new OrdersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrders = (): OrdersState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(conactsInitialState.request)
    const [isLoading, setIsLoading] = useState(conactsInitialState.isLoading)
    const [orders, setOrders] = useState(conactsInitialState.orders)
    const [total, setTotal] = useState(conactsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(conactsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await ordersClient.GetPagedListAsync(request)

        setOrders(response.orders ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await ordersClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.orders) {
            response.orders.forEach(v => {
                delete v.accountId
                delete v.createUserId
                delete v.responsibleUserId
                delete v.type
                delete v.status
                delete v.items
                delete v.attributeLinks
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, orders, total, lastModifyDateTime, getPagedList, getAll }
}

export default useOrders
