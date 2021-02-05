import LeadSourceChangesState, { leadSourceChangesInitialState } from '../../../states/LeadSourceChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadSourcesChangesClient from '../../../../../../../../api/leads/clients/LeadSourcesChangesClient'
import { useParams } from 'react-router'

const leadSourcesChangesClient = new LeadSourcesChangesClient(HttpClientFactoryInstance.Api)

const useLeadSourceChanges = (): LeadSourceChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(leadSourceChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(leadSourceChangesInitialState.isLoading)
    const [changes, setChanges] = useState(leadSourceChangesInitialState.changes)
    const [total, setTotal] = useState(leadSourceChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadSourcesChangesClient.GetPagedListAsync({ ...request, sourceId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadSourcesChangesClient.GetPagedListAsync({
            ...request,
            sourceId: id,
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

export default useLeadSourceChanges
