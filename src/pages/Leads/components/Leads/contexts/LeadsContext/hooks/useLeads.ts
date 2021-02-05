import LeadsState, { conactsInitialState } from '../../../states/LeadsState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadsClient from '../../../../../../../../api/leads/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactoryInstance.Api)

const useLeads = (): LeadsState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(conactsInitialState.request)
    const [isLoading, setIsLoading] = useState(conactsInitialState.isLoading)
    const [leads, setLeads] = useState(conactsInitialState.leads)
    const [total, setTotal] = useState(conactsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(conactsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await leadsClient.GetPagedListAsync(request)

        setLeads(response.leads ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await leadsClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.leads) {
            response.leads.forEach(v => {
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

    return { request, setRequest, isLoading, leads, total, lastModifyDateTime, getPagedList, getAll }
}

export default useLeads
