import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderStatus from '../../../../../../api/orders/models/OrderStatus'
import OrderStatusesClient from '../../../../../../api/orders/clients/OrderStatusesClient'

const orderStatusesClient = new OrderStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseOrderSourcesLoadReturn {
    statusesAsOptions: DropdownItemProps[]
}

const useOrderStatusesLoad = (): UseOrderSourcesLoadReturn => {
    const MaxLimit = 2147483647

    const [statuses, setStatuses] = useState<OrderStatus[]>([])

    const loadSources = useCallback(async () => {
        const response = await orderStatusesClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setStatuses(response.statuses ?? [])
    }, [])

    useEffect(() => {
        void loadSources()
    }, [loadSources])

    const map = useCallback((x: OrderStatus) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const statusesAsOptions = useMemo(() => statuses.filter(x => !x.isDeleted).map(map), [statuses, map])

    return { statusesAsOptions }
}

export default useOrderStatusesLoad
