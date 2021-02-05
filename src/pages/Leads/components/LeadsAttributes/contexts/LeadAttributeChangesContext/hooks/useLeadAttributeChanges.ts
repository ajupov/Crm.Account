import LeadAttributeChangesState, { leadAttributeChangesInitialState } from '../../../states/LeadAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadAttributeChangesClient from '../../../../../../../../api/leads/clients/LeadAttributeChangesClient'
import { useParams } from 'react-router'

const leadAttributeChangesClient = new LeadAttributeChangesClient(HttpClientFactoryInstance.Api)

const useLeadAttributeChanges = (): LeadAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(leadAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(leadAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(leadAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(leadAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await leadAttributeChangesClient.GetPagedListAsync({
            ...request,
            attributeId: id,
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

export default useLeadAttributeChanges
