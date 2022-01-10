import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import Product from '../../../../../../api/products/models/Product'
import ProductsClient from '../../../../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseProductLoadReturn {
    product?: Product
}

const useProductLoad = (id?: string): UseProductLoadReturn => {
    const [product, setProduct] = useState<Product>()

    const loadProduct = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await productsClient.GetAsync(id)

        setProduct(response)
    }, [id])

    useEffect(() => {
        void loadProduct()
    }, [loadProduct])

    return { product }
}

export default useProductLoad
