import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../api/products/models/ProductCategory'

interface UseProductCategoryReturn {
    isLoading: boolean
    category?: ProductCategory
}

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategory = (id: string | undefined): UseProductCategoryReturn => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<ProductCategory | undefined>()

    const load = useCallback(async (): Promise<void> => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productCategoriesClient.GetAsync(id)

        setCategory(response)

        setIsLoading(false)
    }, [id])

    useEffect(() => {
        load()
    }, [load])

    return { isLoading, category }
}

export default useProductCategory
