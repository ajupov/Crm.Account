import { StockBalanceState, stockBalanceInitialState } from '../../../states/StockBalanceState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockBalancesClient from '../../../../../../../api/stock/clients/StockBalancesClient'
import { useParams } from 'react-router'

const stockBalancesClient = new StockBalancesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockBalance = (): StockBalanceState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(stockBalanceInitialState.isLoading)
    const [stockBalance, setStockBalance] = useState(stockBalanceInitialState.stockBalance)

    const get = useCallback(async () => {
        if (!id) {
            setStockBalance({ ...stockBalanceInitialState.stockBalance, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await stockBalancesClient.GetAsync(id)

        setStockBalance(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await stockBalancesClient.CreateAsync(stockBalance)

        setIsLoading(false)
    }, [stockBalance])

    const update = useCallback(async () => {
        setIsLoading(true)

        await stockBalancesClient.UpdateAsync(stockBalance)

        setIsLoading(false)
    }, [stockBalance])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, stockBalance, setStockBalance, create, update }
}

export default useStockBalance
