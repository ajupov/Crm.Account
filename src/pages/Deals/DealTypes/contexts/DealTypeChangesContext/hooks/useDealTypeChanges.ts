import DealTypeChangesState, { dealTypeChangesInitialState } from '../../../states/DealTypeChangesState'
import { useCallback, useEffect, useState } from 'react'

import DealTypesChangesClient from '../../../../../../../api/deals/clients/DealTypesChangesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const dealTypesChangesClient = new DealTypesChangesClient(HttpClientFactoryInstance.Api)

const useDealTypeChanges = (): DealTypeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(dealTypeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(dealTypeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(dealTypeChangesInitialState.changes)
    const [total, setTotal] = useState(dealTypeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealTypesChangesClient.GetPagedListAsync({ ...request, typeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealTypesChangesClient.GetPagedListAsync({
            ...request,
            typeId: id,
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

export default useDealTypeChanges
