import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductStatus from '../../../../../../../api/products/models/ProductStatus'
import ProductStatusesClient from '../../../../../../../api/products/clients/ProductStatusesClient'

const productStatusesClient = new ProductStatusesClient(HttpClientFactoryInstance.Api)

interface UseProductStatusesAutocompleteOptionsReturn {
    loadActualStatuses: (value?: string) => Promise<void>
    actualStatusesAsOptions: DropdownItemProps[]
}

const useProductStatusesAutocompleteOptions = (): UseProductStatusesAutocompleteOptionsReturn => {
    const MaxLimit = 10

    const [statuses, setStatuses] = useState<ProductStatus[]>([])

    const loadActualStatuses = useCallback(async (value?: string) => {
        const response = await productStatusesClient.GetPagedListAsync({
            name: value,
            sortBy: 'Name',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setStatuses(response.statuses ?? [])
    }, [])

    const mapStatus = useCallback((x: ProductStatus) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const actualStatusesAsOptions = useMemo(() => statuses.map(mapStatus), [mapStatus, statuses])

    return { loadActualStatuses, actualStatusesAsOptions }
}

export default useProductStatusesAutocompleteOptions
