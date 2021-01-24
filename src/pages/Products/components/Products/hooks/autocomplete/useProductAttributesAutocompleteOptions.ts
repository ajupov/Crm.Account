import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductAttribute from '../../../../../../../api/products/models/ProductAttribute'
import ProductAttributesClient from '../../../../../../../api/products/clients/ProductAttributesClient'

const productAttributesClient = new ProductAttributesClient(HttpClientFactoryInstance.Api)

interface UseProductAttributesAutocompleteOptionsReturn {
    loadActualAttributes: (value?: string) => Promise<void>
    actualAttributesAsOptions: DropdownItemProps[]
}

const useProductAttributesAutocompleteOptions = (): UseProductAttributesAutocompleteOptionsReturn => {
    const MaxLimit = 10

    const [attributes, setAttributes] = useState<ProductAttribute[]>([])

    const loadActualAttributes = useCallback(async (value?: string) => {
        const response = await productAttributesClient.GetPagedListAsync({
            key: value,
            sortBy: 'Key',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(response.attributes ?? [])
    }, [])

    const mapAttribute = useCallback((x: ProductAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const actualAttributesAsOptions = useMemo(() => attributes.map(mapAttribute), [attributes, mapAttribute])

    return { loadActualAttributes, actualAttributesAsOptions }
}

export default useProductAttributesAutocompleteOptions
