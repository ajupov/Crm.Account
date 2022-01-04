import StockBalanceChangesState, { stockBalanceChangesInitialState } from '../../../states/StockBalanceChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockBalanceChangesClient from '../../../../../../../api/stock/clients/StockBalanceChangesClient'
import { useParams } from 'react-router'

const stockBalanceChangesClient = new StockBalanceChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockBalanceChanges = (): StockBalanceChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(stockBalanceChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(stockBalanceChangesInitialState.isLoading)
    const [changes, setChanges] = useState(stockBalanceChangesInitialState.changes)
    const [total, setTotal] = useState(stockBalanceChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockBalanceChangesClient.GetPagedListAsync({ ...request, stockBalanceId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockBalanceChangesClient.GetPagedListAsync({
            ...request,
            stockBalanceId: id,
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

export default useStockBalanceChanges
