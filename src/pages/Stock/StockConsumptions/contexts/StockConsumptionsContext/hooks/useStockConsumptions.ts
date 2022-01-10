import StockConsumptionsState, { stockConsumptionsInitialState } from '../../../states/StockConsumptionsState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockConsumptionsClient from '../../../../../../../api/stock/clients/StockConsumptionsClient'

const stockConsumptionsClient = new StockConsumptionsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockConsumptions = (): StockConsumptionsState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(stockConsumptionsInitialState.request)
    const [isLoading, setIsLoading] = useState(stockConsumptionsInitialState.isLoading)
    const [stockConsumptions, setStockConsumptions] = useState(stockConsumptionsInitialState.stockConsumptions)
    const [total, setTotal] = useState(stockConsumptionsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(stockConsumptionsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await stockConsumptionsClient.GetPagedListAsync(request)

        setStockConsumptions(response.consumptions ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await stockConsumptionsClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.consumptions) {
            response.consumptions.forEach(v => {
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

    return { request, setRequest, isLoading, stockConsumptions, total, lastModifyDateTime, getPagedList, getAll }
}

export default useStockConsumptions
