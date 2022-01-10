import StockConsumptionChangesState, {
    stockConsumptionChangesInitialState
} from '../../../states/StockConsumptionChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockConsumptionChangesClient from '../../../../../../../api/stock/clients/StockConsumptionChangesClient'
import { useParams } from 'react-router'

const stockConsumptionChangesClient = new StockConsumptionChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockConsumptionChanges = (): StockConsumptionChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(stockConsumptionChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(stockConsumptionChangesInitialState.isLoading)
    const [changes, setChanges] = useState(stockConsumptionChangesInitialState.changes)
    const [total, setTotal] = useState(stockConsumptionChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockConsumptionChangesClient.GetPagedListAsync({ ...request, stockConsumptionId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await stockConsumptionChangesClient.GetPagedListAsync({
            ...request,
            stockConsumptionId: id,
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

export default useStockConsumptionChanges
