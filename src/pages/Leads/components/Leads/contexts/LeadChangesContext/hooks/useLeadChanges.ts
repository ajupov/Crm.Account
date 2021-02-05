import LeadChangesState, { leadChangesInitialState } from '../../../states/LeadChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadChangesClient from '../../../../../../../../api/leads/clients/LeadChangesClient'
import { useParams } from 'react-router'

const leadChangesClient = new LeadChangesClient(HttpClientFactoryInstance.Api)

const useLeadChanges = (): LeadChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(leadChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(leadChangesInitialState.isLoading)
    const [changes, setChanges] = useState(leadChangesInitialState.changes)
    const [total, setTotal] = useState(leadChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadChangesClient.GetPagedListAsync({ ...request, leadId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadChangesClient.GetPagedListAsync({
            ...request,
            leadId: id,
            offset: 0,
            limit: MaxLimit
        })

        if (response.changes) {
            response.changes.forEach(v => {
                delete v.changerUserId
            })
        }

        setIsLoading(false)

        return response
    }, [id, request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useLeadChanges
