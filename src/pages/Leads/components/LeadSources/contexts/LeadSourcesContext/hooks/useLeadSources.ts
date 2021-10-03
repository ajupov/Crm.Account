import CustomerSourcesState, { customerSourcesInitialState } from '../../../states/CustomerSourcesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import CustomerSourcesClient from '../../../../../../../../api/customers/clients/CustomerSourcesClient'

const customerSourcesClient = new CustomerSourcesClient(HttpClientFactory.Api)

const useCustomerSources = (): CustomerSourcesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(customerSourcesInitialState.request)
    const [isLoading, setIsLoading] = useState(customerSourcesInitialState.isLoading)
    const [sources, setSources] = useState(customerSourcesInitialState.sources)
    const [total, setTotal] = useState(customerSourcesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(customerSourcesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await customerSourcesClient.GetPagedListAsync(request)

        setSources(response.sources ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await customerSourcesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.sources) {
            response.sources.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, sources, total, lastModifyDateTime, getPagedList, getAll }
}

export default useCustomerSources
