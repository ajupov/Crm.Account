import OrderChangesState, { orderChangesInitialState } from '../../../states/OrderChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderChangesClient from '../../../../../../../api/orders/clients/OrderChangesClient'
import { useParams } from 'react-router'

const orderChangesClient = new OrderChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderChanges = (): OrderChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(orderChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(orderChangesInitialState.isLoading)
    const [changes, setChanges] = useState(orderChangesInitialState.changes)
    const [total, setTotal] = useState(orderChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderChangesClient.GetPagedListAsync({ ...request, orderId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderChangesClient.GetPagedListAsync({
            ...request,
            orderId: id,
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

export default useOrderChanges
