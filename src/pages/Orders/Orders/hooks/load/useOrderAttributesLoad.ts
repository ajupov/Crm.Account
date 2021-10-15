import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderAttribute from '../../../../../../api/orders/models/OrderAttribute'
import OrderAttributesClient from '../../../../../../api/orders/clients/OrderAttributesClient'

const orderAttributesClient = new OrderAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseOrderAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
}

const useOrderAttributesLoad = (): UseOrderAttributesLoadReturn => {
    const MaxLimit = 2147483647

    const [attributes, setAttributes] = useState<OrderAttribute[]>([])

    const loadAttributes = useCallback(async () => {
        const response = await orderAttributesClient.GetPagedListAsync({
            sortBy: 'Key',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(response.attributes ?? [])
    }, [])

    useEffect(() => {
        void loadAttributes()
    }, [loadAttributes])

    const map = useCallback((x: OrderAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const attributesAsOptions = useMemo(() => attributes.filter(x => !x.isDeleted).map(map), [attributes, map])

    return { attributesAsOptions }
}

export default useOrderAttributesLoad
