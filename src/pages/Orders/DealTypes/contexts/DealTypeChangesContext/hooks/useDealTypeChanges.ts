import OrderTypeChangesState, { orderTypeChangesInitialState } from '../../../states/OrderTypeChangesState'
import { useCallback, useEffect, useState } from 'react'

import OrderTypesChangesClient from '../../../../../../../api/orders/clients/OrderTypesChangesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const orderTypesChangesClient = new OrderTypesChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderTypeChanges = (): OrderTypeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(orderTypeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(orderTypeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(orderTypeChangesInitialState.changes)
    const [total, setTotal] = useState(orderTypeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderTypesChangesClient.GetPagedListAsync({ ...request, typeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderTypesChangesClient.GetPagedListAsync({
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

export default useOrderTypeChanges
