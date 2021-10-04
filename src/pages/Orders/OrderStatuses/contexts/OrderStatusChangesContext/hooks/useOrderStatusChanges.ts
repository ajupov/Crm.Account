import OrderStatusChangesState, { orderStatusChangesInitialState } from '../../../states/OrderStatusChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderStatusesChangesClient from '../../../../../../../api/orders/clients/OrderStatusesChangesClient'
import { useParams } from 'react-router'

const orderStatusesChangesClient = new OrderStatusesChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderStatusChanges = (): OrderStatusChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(orderStatusChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(orderStatusChangesInitialState.isLoading)
    const [changes, setChanges] = useState(orderStatusChangesInitialState.changes)
    const [total, setTotal] = useState(orderStatusChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderStatusesChangesClient.GetPagedListAsync({ ...request, statusId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderStatusesChangesClient.GetPagedListAsync({
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

export default useOrderStatusChanges
