import StockArrivalChangesState, { stockArrivalChangesInitialState } from '../../../states/StockArrivalChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockArrivalChangesClient from '../../../../../../../api/stock/clients/StockArrivalChangesClient'
import { useParams } from 'react-router'

const stockArrivalChangesClient = new StockArrivalChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockArrivalChanges = (): StockArrivalChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(stockArrivalChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(stockArrivalChangesInitialState.isLoading)
    const [changes, setChanges] = useState(stockArrivalChangesInitialState.changes)
    const [total, setTotal] = useState(stockArrivalChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockArrivalChangesClient.GetPagedListAsync({ ...request, stockArrivalId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockArrivalChangesClient.GetPagedListAsync({
            ...request,
            stockArrivalId: id,
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

export default useStockArrivalChanges
