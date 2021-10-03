import OrderAttributeChangesState, {
    orderAttributeChangesInitialState
} from '../../../states/OrderAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import OrderAttributeChangesClient from '../../../../../../../api/orders/clients/OrderAttributeChangesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const orderAttributeChangesClient = new OrderAttributeChangesClient(HttpClientFactory.Api)

const useOrderAttributeChanges = (): OrderAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(orderAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(orderAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(orderAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(orderAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderAttributeChangesClient.GetPagedListAsync({
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

export default useOrderAttributeChanges
