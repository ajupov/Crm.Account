import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import Product from '../../../../../../api/products/models/Product'
import ProductsClient from '../../../../../../api/products/clients/ProductsClient'
import { useCallback } from 'react'

const productsClient = new ProductsClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseOrderSourcesLoadReturn {
    loadProducts: (ids?: (string | undefined)[] | undefined) => Promise<Product[] | undefined>
    loadProduct: (id?: string | undefined) => Promise<Product | undefined>
}

const useProductsLoad = (): UseOrderSourcesLoadReturn => {
    const loadProducts = useCallback(async (ids?: (string | undefined)[]) => {
        const filteredIds = ids?.filter(x => x).map(x => x!)
        if (!filteredIds || !filteredIds.length) {
            return []
        }

        return (await productsClient.GetListAsync(filteredIds)) ?? []
    }, [])

    const loadProduct = useCallback(async (id?: string | undefined) => {
        if (!id) {
            return void 0
        }

        return (await productsClient.GetAsync(id)) ?? void 0
    }, [])

    return { loadProducts, loadProduct }
}

export default useProductsLoad
