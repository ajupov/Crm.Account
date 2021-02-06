import DealStatusChangesState, { dealStatusChangesInitialState } from '../../../states/DealStatusChangesState'
import { useCallback, useEffect, useState } from 'react'

import DealStatusesChangesClient from '../../../../../../../api/deals/clients/DealStatusesChangesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const dealStatusesChangesClient = new DealStatusesChangesClient(HttpClientFactoryInstance.Api)

const useDealStatusChanges = (): DealStatusChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(dealStatusChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(dealStatusChangesInitialState.isLoading)
    const [changes, setChanges] = useState(dealStatusChangesInitialState.changes)
    const [total, setTotal] = useState(dealStatusChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealStatusesChangesClient.GetPagedListAsync({ ...request, statusId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealStatusesChangesClient.GetPagedListAsync({
            ...request,
            statusId: id,
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

export default useDealStatusChanges
