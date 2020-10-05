import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Product from '../../../../../../api/products/models/Product'
import ProductsClient from '../../../../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactoryInstance.Api)

interface UseProductNameReturn {
    getProductName: () => string
}

// TODO: Move to l10n
const useProductName = (id?: string): UseProductNameReturn => {
    const [product, setProduct] = useState<Product>()

    const getProduct = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await productsClient.GetAsync(id)

        setProduct(response)
    }, [id])

    const getProductName = useCallback(() => product?.name ?? '', [product])

    useEffect(() => {
        void getProduct()
    }, [getProduct])

    return { getProductName }
}

export default useProductName
