import { useCallback, useEffect, useState } from 'react'

import Create from '../../../utils/httpClient/Create'
import ProductCategoriesClient from '../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../api/products/models/ProductCategory'

const httpClientFactory = Create.HttpClientFactory.WithApiUrl().Build()
const productCategoriesClient = new ProductCategoriesClient(httpClientFactory)

const useProductCategory = (id: string | undefined): ProductCategory | undefined => {
    const [category, setCategory] = useState<ProductCategory | undefined>()

    const loadCategories = useCallback(async (): Promise<void> => {
        if (!id) {
            return
        }

        const response = await productCategoriesClient.GetAsync(id)

        setCategory(response)
    }, [id])

    useEffect(() => {
        loadCategories()
    }, [loadCategories])

    return category
}

export default useProductCategory
