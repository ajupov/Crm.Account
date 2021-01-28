import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Product from '../../../../../../../api/products/models/Product'
import ProductStatus from '../../../../../../../api/products/models/ProductStatus'
import ProductsClient from '../../../../../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactoryInstance.Api)

interface UseProductsAutocompleteReturn {
    loadProducts: (value?: string) => Promise<void>
    productsAsOptions: DropdownItemProps[]
}

const useProductsAutocomplete = (): UseProductsAutocompleteReturn => {
    const MaxLimit = 10

    const [products, setProducts] = useState<Product[]>([])

    const loadProducts = useCallback(async (value?: string) => {
        const response = await productsClient.GetPagedListAsync({
            name: value,
            sortBy: 'Name',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setProducts(response.products ?? [])
    }, [])

    const map = useCallback((x: ProductStatus) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const productsAsOptions = useMemo(() => products.map(map), [map, products])

    return { loadProducts, productsAsOptions }
}

export default useProductsAutocomplete
