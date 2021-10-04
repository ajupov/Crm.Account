import CustomerAttributesState, { customerAttributesInitialState } from '../../../states/CustomerAttributesState'
import { useCallback, useEffect, useState } from 'react'

import CustomerAttributesClient from '../../../../../../../api/customers/clients/CustomerAttributesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const customerAttributesClient = new CustomerAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerAttributes = (): CustomerAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(customerAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(customerAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(customerAttributesInitialState.attributes)
    const [total, setTotal] = useState(customerAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(customerAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await customerAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await customerAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
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

export default useCustomerAttributes
