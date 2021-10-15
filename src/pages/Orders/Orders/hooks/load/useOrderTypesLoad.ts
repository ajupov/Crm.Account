import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderType from '../../../../../../api/orders/models/OrderType'
import OrderTypesClient from '../../../../../../api/orders/clients/OrderTypesClient'

const orderTypesClient = new OrderTypesClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseOrderSourcesLoadReturn {
    typesAsOptions: DropdownItemProps[]
}

const useOrderTypesLoad = (): UseOrderSourcesLoadReturn => {
    const MaxLimit = 2147483647

    const [types, setTypes] = useState<OrderType[]>([])

    const loadSources = useCallback(async () => {
        const response = await orderTypesClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setTypes(response.types ?? [])
    }, [])

    useEffect(() => {
        void loadSources()
    }, [loadSources])

    const map = useCallback((x: OrderType) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const typesAsOptions = useMemo(() => types.filter(x => !x.isDeleted).map(map), [types, map])

    return { typesAsOptions }
}

export default useOrderTypesLoad
