import { StockRoomState, stockRoomInitialState } from '../../../states/StockRoomState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import StockRoomsClient from '../../../../../../../api/stock/clients/StockRoomsClient'
import { useParams } from 'react-router'

const stockRoomsClient = new StockRoomsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useStockRoom = (): StockRoomState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(stockRoomInitialState.isLoading)
    const [room, setStatus] = useState(stockRoomInitialState.room)

    const get = useCallback(async () => {
        if (!id) {
            setStatus({ ...stockRoomInitialState.room, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await stockRoomsClient.GetAsync(id)

        setStatus(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await stockRoomsClient.CreateAsync(room)

        setIsLoading(false)
    }, [room])

    const update = useCallback(async () => {
        setIsLoading(true)

        await stockRoomsClient.UpdateAsync(room)

        setIsLoading(false)
    }, [room])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, room, setStatus, create, update }
}

export default useStockRoom
