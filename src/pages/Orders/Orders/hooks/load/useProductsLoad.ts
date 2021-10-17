import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import Product from '../../../../../../api/products/models/Product'
import ProductsClient from '../../../../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseOrderSourcesLoadReturn {
    products: Product[]
}

const useProductsLoad = (ids?: (string | undefined)[]): UseOrderSourcesLoadReturn => {
    const [products, setProducts] = useState<Product[]>([])

    const loadProducts = useCallback(async () => {
        const filteredIds = ids?.filter(x => x).map(x => x!)
        if (!filteredIds || !filteredIds.length) {
            return
        }

        const response = await productsClient.GetListAsync(filteredIds)

        setProducts(response ?? [])
    }, [ids])

    useEffect(() => {
        void loadProducts()
    }, [loadProducts])

    return { products }
}

export default useProductsLoad
