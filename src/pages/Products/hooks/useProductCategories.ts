import { useCallback, useEffect, useState } from 'react'

import Create from '../../../utils/httpClient/Create'
import ProductCategoriesClient from '../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../api/products/models/ProductCategory'

const useProductCategories = (offset: number, limit: number): ProductCategory[] => {
    const httpClientFactory = Create.HttpClientFactory.WithApiUrl().Build()

    const productCategoriesClient = new ProductCategoriesClient(httpClientFactory)

    const [categories, setCategories] = useState<ProductCategory[]>([])

    const loadCategories = useCallback(async (): Promise<void> => {
        const response = await productCategoriesClient.GetPagedListAsync({ offset, limit, isDeleted: false })

        setCategories(response.categories || [])
    }, [productCategoriesClient, offset, limit])

    useEffect(() => {
        loadCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return categories
}

export default useProductCategories
