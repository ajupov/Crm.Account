import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductStatus from '../../../../../../api/products/models/ProductStatus'
import ProductStatusesClient from '../../../../../../api/products/clients/ProductStatusesClient'

const productStatusesClient = new ProductStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseProductStatusesLoadReturn {
    statusesAsOptions: DropdownItemProps[]
}

const useProductStatusesLoad = (): UseProductStatusesLoadReturn => {
    const MaxLimit = 2147483647

    const [statuses, setStatuses] = useState<ProductStatus[]>([])

    const loadStatuses = useCallback(async () => {
        const response = await productStatusesClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setStatuses(response.statuses ?? [])
    }, [])

    useEffect(() => {
        void loadStatuses()
    }, [loadStatuses])

    const map = useCallback((x: ProductStatus) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const statusesAsOptions = useMemo(() => statuses.filter(x => !x.isDeleted).map(map), [statuses, map])

    return { statusesAsOptions }
}

export default useProductStatusesLoad
