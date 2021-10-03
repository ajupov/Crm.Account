import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductAttribute from '../../../../../../../api/products/models/ProductAttribute'
import ProductAttributesClient from '../../../../../../../api/products/clients/ProductAttributesClient'

const productAttributesClient = new ProductAttributesClient(HttpClientFactory.Api)

interface UseProductAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
}

const useProductAttributesLoad = (): UseProductAttributesLoadReturn => {
    const MaxLimit = 2147483647

    const [attributes, setAttributes] = useState<ProductAttribute[]>([])

    const loadAttributes = useCallback(async () => {
        const response = await productAttributesClient.GetPagedListAsync({
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

    const map = useCallback((x: ProductAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const attributesAsOptions = useMemo(() => attributes.filter(x => !x.isDeleted).map(map), [attributes, map])

    return { attributesAsOptions }
}

export default useProductAttributesLoad
