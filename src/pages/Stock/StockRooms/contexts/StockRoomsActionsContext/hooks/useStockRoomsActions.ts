import StockRoomsActionsState, { stockRoomsActionsInitialState } from '../../../states/StockRoomsActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockRoomsClient from '../../../../../../../api/stock/clients/StockRoomsClient'

const stockRoomsClient = new StockRoomsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockRoomsActions = (): StockRoomsActionsState => {
    const [ids, setIds] = useState(stockRoomsActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(stockRoomsActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(stockRoomsActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(stockRoomsActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await stockRoomsClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await stockRoomsClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useStockRoomsActions
