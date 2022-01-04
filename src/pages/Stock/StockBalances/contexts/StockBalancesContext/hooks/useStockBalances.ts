import StockBalancesState, { stockBalancesInitialState } from '../../../states/StockBalancesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockBalancesClient from '../../../../../../../api/stock/clients/StockBalancesClient'

const stockBalancesClient = new StockBalancesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockBalances = (): StockBalancesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(stockBalancesInitialState.request)
    const [isLoading, setIsLoading] = useState(stockBalancesInitialState.isLoading)
    const [stockBalances, setStockBalances] = useState(stockBalancesInitialState.stockBalances)
    const [total, setTotal] = useState(stockBalancesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(stockBalancesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await stockBalancesClient.GetPagedListAsync(request)

        setStockBalances(response.balances ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await stockBalancesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.balances) {
            response.balances.forEach(v => {
                delete v.accountId
                delete v.createUserId
                delete v.uniqueElementIds
                delete v.room
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, stockBalances, total, lastModifyDateTime, getPagedList, getAll }
}

export default useStockBalances
