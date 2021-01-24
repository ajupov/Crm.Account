import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Product from '../../../../../../../api/products/models/Product'
import ProductsClient from '../../../../../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactoryInstance.Api)

interface UseProductReturn {
    productName?: string
}

const useProduct = (id?: string): UseProductReturn => {
    const [product, setProduct] = useState<Product>()

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await productsClient.GetAsync(id)

        setProduct(response)
    }, [id])

    useEffect(() => {
        void get()
    }, [get])

    return { productName: product?.name }
}

export default useProduct
