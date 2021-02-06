import DealTypesState, { dealTypesInitialState } from '../../../states/DealTypesState'
import { useCallback, useEffect, useState } from 'react'

import DealTypesClient from '../../../../../../../api/deals/clients/DealTypesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const dealTypesClient = new DealTypesClient(HttpClientFactoryInstance.Api)

const useDealTypes = (): DealTypesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(dealTypesInitialState.request)
    const [isLoading, setIsLoading] = useState(dealTypesInitialState.isLoading)
    const [types, setTypes] = useState(dealTypesInitialState.types)
    const [total, setTotal] = useState(dealTypesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(dealTypesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await dealTypesClient.GetPagedListAsync(request)

        setTypes(response.types ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await dealTypesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
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

export default useDealTypes
