import StockRoomsState, { stockRoomsInitialState } from '../../../states/StockRoomsState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockRoomsClient from '../../../../../../../api/stock/clients/StockRoomsClient'

const stockRoomsClient = new StockRoomsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockRooms = (): StockRoomsState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(stockRoomsInitialState.request)
    const [isLoading, setIsLoading] = useState(stockRoomsInitialState.isLoading)
    const [rooms, setStatuses] = useState(stockRoomsInitialState.rooms)
    const [total, setTotal] = useState(stockRoomsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(stockRoomsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await stockRoomsClient.GetPagedListAsync(request)

        setStatuses(response.rooms ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await stockRoomsClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.rooms) {
            response.rooms.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, rooms, total, lastModifyDateTime, getPagedList, getAll }
}

export default useStockRooms
