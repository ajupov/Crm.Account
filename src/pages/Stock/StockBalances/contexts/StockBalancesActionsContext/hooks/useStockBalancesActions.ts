import StockBalancesActionsState, { stockBalancesActionsInitialState } from '../../../states/StockBalancesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockBalancesClient from '../../../../../../../api/stock/clients/StockBalancesClient'

const stockBalancesClient = new StockBalancesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockBalancesActions = (): StockBalancesActionsState => {
    const [ids, setIds] = useState(stockBalancesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(stockBalancesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(stockBalancesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(stockBalancesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await stockBalancesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await stockBalancesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useStockBalancesActions
