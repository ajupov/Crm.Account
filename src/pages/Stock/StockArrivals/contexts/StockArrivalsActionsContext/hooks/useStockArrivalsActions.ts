import StockArrivalsActionsState, { stockArrivalsActionsInitialState } from '../../../states/StockArrivalsActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockArrivalsClient from '../../../../../../../api/stock/clients/StockArrivalsClient'

const stockArrivalsClient = new StockArrivalsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockArrivalsActions = (): StockArrivalsActionsState => {
    const [ids, setIds] = useState(stockArrivalsActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(stockArrivalsActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(stockArrivalsActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(stockArrivalsActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await stockArrivalsClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await stockArrivalsClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useStockArrivalsActions
