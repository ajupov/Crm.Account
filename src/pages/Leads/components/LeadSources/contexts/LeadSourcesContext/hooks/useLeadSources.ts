import LeadSourcesState, { leadSourcesInitialState } from '../../../states/LeadSourcesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadSourcesClient from '../../../../../../../../api/leads/clients/LeadSourcesClient'

const leadSourcesClient = new LeadSourcesClient(HttpClientFactoryInstance.Api)

const useLeadSources = (): LeadSourcesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(leadSourcesInitialState.request)
    const [isLoading, setIsLoading] = useState(leadSourcesInitialState.isLoading)
    const [sources, setSources] = useState(leadSourcesInitialState.sources)
    const [total, setTotal] = useState(leadSourcesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(leadSourcesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await leadSourcesClient.GetPagedListAsync(request)

        setSources(response.sources ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await leadSourcesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
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

export default useLeadSources
