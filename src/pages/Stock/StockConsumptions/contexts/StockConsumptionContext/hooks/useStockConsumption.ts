import { StockConsumptionState, stockConsumptionInitialState } from '../../../states/StockConsumptionState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockConsumptionsClient from '../../../../../../../api/stock/clients/StockConsumptionsClient'
import { useParams } from 'react-router'

const stockConsumptionsClient = new StockConsumptionsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockConsumption = (): StockConsumptionState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(stockConsumptionInitialState.isLoading)
    const [stockConsumption, setStockConsumption] = useState(stockConsumptionInitialState.stockConsumption)

    const get = useCallback(async () => {
        if (!id) {
            setStockConsumption({ ...stockConsumptionInitialState.stockConsumption, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await stockConsumptionsClient.GetAsync(id)

        setStockConsumption(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await stockConsumptionsClient.CreateAsync(stockConsumption)

        setIsLoading(false)
    }, [stockConsumption])

    const update = useCallback(async () => {
        setIsLoading(true)

        await stockConsumptionsClient.UpdateAsync(stockConsumption)

        setIsLoading(false)
    }, [stockConsumption])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, stockConsumption, setStockConsumption, create, update }
}

export default useStockConsumption
