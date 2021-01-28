import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductAttribute from '../../../../../../../api/products/models/ProductAttribute'
import ProductAttributesClient from '../../../../../../../api/products/clients/ProductAttributesClient'

const productAttributesClient = new ProductAttributesClient(HttpClientFactoryInstance.Api)

interface UseProductAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
    getAtttribute: (id: string) => ProductAttribute | undefined
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

    const getAtttribute = useCallback((id: string) => attributes.find(x => x.id === id), [attributes])

    return { attributesAsOptions, getAtttribute }
}

export default useProductAttributesLoad
