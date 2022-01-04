import StockRoomChangesState, { stockRoomChangesInitialState } from '../../../states/StockRoomChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockRoomChangesClient from '../../../../../../../api/stock/clients/StockRoomChangesClient'
import { useParams } from 'react-router'

const stockRoomChangesClient = new StockRoomChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockRoomChanges = (): StockRoomChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(stockRoomChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(stockRoomChangesInitialState.isLoading)
    const [changes, setChanges] = useState(stockRoomChangesInitialState.changes)
    const [total, setTotal] = useState(stockRoomChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockRoomChangesClient.GetPagedListAsync({ ...request, stockRoomId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockRoomChangesClient.GetPagedListAsync({
            ...request,
            stockRoomId: id,
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

export default useStockRoomChanges
