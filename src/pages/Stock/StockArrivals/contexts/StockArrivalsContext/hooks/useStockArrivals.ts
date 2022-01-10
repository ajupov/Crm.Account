import StockArrivalsState, { stockArrivalsInitialState } from '../../../states/StockArrivalsState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockArrivalsClient from '../../../../../../../api/stock/clients/StockArrivalsClient'

const stockArrivalsClient = new StockArrivalsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockArrivals = (): StockArrivalsState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(stockArrivalsInitialState.request)
    const [isLoading, setIsLoading] = useState(stockArrivalsInitialState.isLoading)
    const [stockArrivals, setStockArrivals] = useState(stockArrivalsInitialState.stockArrivals)
    const [total, setTotal] = useState(stockArrivalsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(stockArrivalsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await stockArrivalsClient.GetPagedListAsync(request)

        setStockArrivals(response.arrivals ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await stockArrivalsClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.arrivals) {
            response.arrivals.forEach(v => {
                delete v.accountId
                delete v.createUserId
                delete v.items
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, stockArrivals, total, lastModifyDateTime, getPagedList, getAll }
}

export default useStockArrivals
