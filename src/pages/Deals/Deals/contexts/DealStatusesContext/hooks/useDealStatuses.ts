import OrderStatusesState, { orderStatusesInitialState } from '../../../states/OrderStatusesState'
import { useCallback, useEffect, useState } from 'react'

import OrderStatusesClient from '../../../../../../../api/orders/clients/OrderStatusesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const orderStatusesClient = new OrderStatusesClient(HttpClientFactory.Api)

const useOrderStatuses = (): OrderStatusesState => {
    const MaxLimit = 2147483647

    const [isLoading, setIsLoading] = useState(orderStatusesInitialState.isLoading)
    const [statuses, setStatuses] = useState(orderStatusesInitialState.statuses)

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await orderStatusesClient.GetPagedListAsync({
            isDeleted: false,
            limit: MaxLimit,
            offset: 0,
            sortBy: 'IsFinish',
            orderBy: 'asc'
        })

        setStatuses(response.statuses ?? [])

        setIsLoading(false)
    }, [])

    useEffect(() => {
        void getAll()
    }, [getAll])

    return { isLoading, statuses, getAll }
}

export default useOrderStatuses
