import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import Order from '../../../../../../api/orders/models/Order'
import OrdersClient from '../../../../../../api/orders/clients/OrdersClient'

const ordersClient = new OrdersClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseOrdersAutocompleteReturn {
    loadOrders: (value?: string) => Promise<void>
    ordersAsOptions: DropdownItemProps[]
}

const useOrdersAutocomplete = (): UseOrdersAutocompleteReturn => {
    const MaxLimit = 10

    const [orders, setOrders] = useState<Order[]>([])

    const loadOrders = useCallback(async (value?: string) => {
        const response = await ordersClient.GetPagedListAsync({
            name: value,
            sortBy: 'Name',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setOrders(response.orders ?? [])
    }, [])

    const mapOrderText = useCallback((order: Order) => (order.name ? `${order.name} ` : '').trim(), [])

    const map = useCallback((x: Order) => ({ value: x.id ?? '', text: mapOrderText(x) }), [mapOrderText])

    const ordersAsOptions = useMemo(() => orders.map(map), [map, orders])

    return { loadOrders, ordersAsOptions }
}

export default useOrdersAutocomplete
