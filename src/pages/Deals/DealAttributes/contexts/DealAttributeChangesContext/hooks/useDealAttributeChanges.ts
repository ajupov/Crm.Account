import DealAttributeChangesState, { dealAttributeChangesInitialState } from '../../../states/DealAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import DealAttributeChangesClient from '../../../../../../../api/orders/clients/DealAttributeChangesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const dealAttributeChangesClient = new DealAttributeChangesClient(HttpClientFactory.Api)

const useDealAttributeChanges = (): DealAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(dealAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(dealAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(dealAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(dealAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealAttributeChangesClient.GetPagedListAsync({
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

export default useDealAttributeChanges
