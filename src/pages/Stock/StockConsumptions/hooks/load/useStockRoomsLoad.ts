import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import StockRoom from '../../../../../../api/stock/models/StockRoom'
import StockRoomsClient from '../../../../../../api/stock/clients/StockRoomsClient'

const stockRoomsClient = new StockRoomsClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseStockRoomsLoadReturn {
    roomsAsOptions: DropdownItemProps[]
}

const useStockRoomsLoad = (): UseStockRoomsLoadReturn => {
    const MaxLimit = 2147483647

    const [rooms, setTypes] = useState<StockRoom[]>([])

    const loadRooms = useCallback(async () => {
        const response = await stockRoomsClient.GetPagedListAsync({
            name: '',
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit,
            isDeleted: false
        })

        setTypes(response.rooms ?? [])
    }, [])

    useEffect(() => {
        void loadRooms()
    }, [loadRooms])

    const map = useCallback((x: StockRoom) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const roomsAsOptions = useMemo(() => rooms.filter(x => !x.isDeleted).map(map), [rooms, map])

    return { roomsAsOptions }
}

export default useStockRoomsLoad
