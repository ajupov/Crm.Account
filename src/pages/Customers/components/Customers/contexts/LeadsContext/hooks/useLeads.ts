import CustomersState, { conactsInitialState } from '../../../states/CustomersState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import CustomersClient from '../../../../../../../../api/customers/clients/CustomersClient'

const customersClient = new CustomersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomers = (): CustomersState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(conactsInitialState.request)
    const [isLoading, setIsLoading] = useState(conactsInitialState.isLoading)
    const [customers, setCustomers] = useState(conactsInitialState.customers)
    const [total, setTotal] = useState(conactsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(conactsInitialState.lastModifyDateTime)

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
