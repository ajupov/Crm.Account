import { StockArrivalState, stockArrivalInitialState } from '../../../states/StockArrivalState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockArrivalsClient from '../../../../../../../api/stock/clients/StockArrivalsClient'
import { useParams } from 'react-router'

const stockArrivalsClient = new StockArrivalsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockArrival = (): StockArrivalState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(stockArrivalInitialState.isLoading)
    const [stockArrival, setStockArrival] = useState(stockArrivalInitialState.stockArrival)

    const get = useCallback(async () => {
        if (!id) {
            setStockArrival({ ...stockArrivalInitialState.stockArrival, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await stockArrivalsClient.GetAsync(id)

        setStockArrival(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await stockArrivalsClient.CreateAsync(stockArrival)

        setIsLoading(false)
    }, [stockArrival])

    const update = useCallback(async () => {
        setIsLoading(true)

        await stockArrivalsClient.UpdateAsync(stockArrival)

        setIsLoading(false)
    }, [stockArrival])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, stockArrival, setStockArrival, create, update }
}

export default useStockArrival
