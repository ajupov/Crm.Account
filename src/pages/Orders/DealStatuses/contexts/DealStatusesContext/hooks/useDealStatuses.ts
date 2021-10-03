import OrderStatusesState, { orderStatusesInitialState } from '../../../states/OrderStatusesState'
import { useCallback, useEffect, useState } from 'react'

import OrderStatusesClient from '../../../../../../../api/orders/clients/OrderStatusesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const orderStatusesClient = new OrderStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderStatuses = (): OrderStatusesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(orderStatusesInitialState.request)
    const [isLoading, setIsLoading] = useState(orderStatusesInitialState.isLoading)
    const [statuses, setStatuses] = useState(orderStatusesInitialState.statuses)
    const [total, setTotal] = useState(orderStatusesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(orderStatusesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await orderStatusesClient.GetPagedListAsync(request)

        setStatuses(response.statuses ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await orderStatusesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.statuses) {
            response.statuses.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, statuses, total, lastModifyDateTime, getPagedList, getAll }
}

export default useOrderStatuses
