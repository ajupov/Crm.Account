import OrdersState, { ordersInitialState } from '../../../states/OrdersState'
import { useCallback, useEffect, useState } from 'react'

import Customer from '../../../../../../../api/customers/models/Customer'
import CustomersClient from '../../../../../../../api/customers/clients/CustomersClient'
import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrdersClient from '../../../../../../../api/orders/clients/OrdersClient'

const ordersClient = new OrdersClient(HttpClientFactory.Host, HttpClientFactory.Api)
const customersClient = new CustomersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrders = (): OrdersState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(ordersInitialState.request)
    const [isLoading, setIsLoading] = useState(ordersInitialState.isLoading)
    const [orders, setOrders] = useState(ordersInitialState.orders)
    const [customers, setCustomers] = useState<Customer[]>([])
    const [total, setTotal] = useState(ordersInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(ordersInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await ordersClient.GetPagedListAsync(request)

        setOrders(response.orders ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        if (response.orders) {
            const customerIds = response.orders.filter(x => x.customerId !== Guid.EMPTY).map(x => x.customerId ?? '')

            const customers = await customersClient.GetListAsync(customerIds)
            setCustomers(customers)
        }

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

    return { request, setRequest, isLoading, orders, customers, total, lastModifyDateTime, getPagedList, getAll }
}

export default useOrders
