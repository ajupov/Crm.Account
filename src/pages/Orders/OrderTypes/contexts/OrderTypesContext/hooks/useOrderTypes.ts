import OrderTypesState, { orderTypesInitialState } from '../../../states/OrderTypesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderTypesClient from '../../../../../../../api/orders/clients/OrderTypesClient'

const orderTypesClient = new OrderTypesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderTypes = (): OrderTypesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(orderTypesInitialState.request)
    const [isLoading, setIsLoading] = useState(orderTypesInitialState.isLoading)
    const [types, setTypes] = useState(orderTypesInitialState.types)
    const [total, setTotal] = useState(orderTypesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(orderTypesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await orderTypesClient.GetPagedListAsync(request)

        setTypes(response.types ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await orderTypesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.types) {
            response.types.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, types, total, lastModifyDateTime, getPagedList, getAll }
}

export default useOrderTypes
