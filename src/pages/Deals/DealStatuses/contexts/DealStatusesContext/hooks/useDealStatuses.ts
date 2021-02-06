import DealStatusesState, { dealStatusesInitialState } from '../../../states/DealStatusesState'
import { useCallback, useEffect, useState } from 'react'

import DealStatusesClient from '../../../../../../../api/deals/clients/DealStatusesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const dealStatusesClient = new DealStatusesClient(HttpClientFactoryInstance.Api)

const useDealStatuses = (): DealStatusesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(dealStatusesInitialState.request)
    const [isLoading, setIsLoading] = useState(dealStatusesInitialState.isLoading)
    const [statuses, setStatuses] = useState(dealStatusesInitialState.statuses)
    const [total, setTotal] = useState(dealStatusesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(dealStatusesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await dealStatusesClient.GetPagedListAsync(request)

        setStatuses(response.statuses ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await dealStatusesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
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

export default useDealStatuses
