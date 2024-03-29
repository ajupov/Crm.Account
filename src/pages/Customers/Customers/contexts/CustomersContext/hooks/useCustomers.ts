import CustomersState, { customersInitialState } from '../../../states/CustomersState'
import { useCallback, useEffect, useState } from 'react'

import CustomersClient from '../../../../../../../api/customers/clients/CustomersClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const customersClient = new CustomersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomers = (): CustomersState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(customersInitialState.request)
    const [isLoading, setIsLoading] = useState(customersInitialState.isLoading)
    const [customers, setCustomers] = useState(customersInitialState.customers)
    const [total, setTotal] = useState(customersInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(customersInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await customersClient.GetPagedListAsync(request)

        setCustomers(response.customers ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await customersClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.customers) {
            response.customers.forEach(v => {
                delete v.accountId
                delete v.createUserId
                delete v.responsibleUserId
                delete v.image
                delete v.source
                delete v.attributeLinks
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, customers, total, lastModifyDateTime, getPagedList, getAll }
}

export default useCustomers
