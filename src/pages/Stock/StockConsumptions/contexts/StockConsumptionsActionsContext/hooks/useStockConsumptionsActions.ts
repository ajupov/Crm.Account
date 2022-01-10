import StockConsumptionsActionsState, {
    stockConsumptionsActionsInitialState
} from '../../../states/StockConsumptionsActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockConsumptionsClient from '../../../../../../../api/stock/clients/StockConsumptionsClient'

const stockConsumptionsClient = new StockConsumptionsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockConsumptionsActions = (): StockConsumptionsActionsState => {
    const [ids, setIds] = useState(stockConsumptionsActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(stockConsumptionsActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(stockConsumptionsActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(stockConsumptionsActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await stockConsumptionsClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await stockConsumptionsClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useStockConsumptionsActions
