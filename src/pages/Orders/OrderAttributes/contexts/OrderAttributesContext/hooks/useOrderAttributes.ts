import OrderAttributesState, { orderAttributesInitialState } from '../../../states/OrderAttributesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderAttributesClient from '../../../../../../../api/orders/clients/OrderAttributesClient'

const orderAttributesClient = new OrderAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderAttributes = (): OrderAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(orderAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(orderAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(orderAttributesInitialState.attributes)
    const [total, setTotal] = useState(orderAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(orderAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await orderAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await orderAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.attributes) {
            response.attributes.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, attributes, total, lastModifyDateTime, getPagedList, getAll }
}

export default useOrderAttributes
