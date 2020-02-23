import { useCallback, useEffect, useState } from 'react'

import Create from '../../../utils/httpClient/Create'
import EntityData from '../../../models/EntityData'
import ProductCategoriesClient from '../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../api/products/models/ProductCategory'

const httpClientFactory = Create.HttpClientFactory.WithApiUrl().Build()
const productCategoriesClient = new ProductCategoriesClient(httpClientFactory)

const useProductCategory = (id: string | undefined): EntityData<ProductCategory> => {
    const [category, setCategory] = useState<ProductCategory | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loadCategories = useCallback(async (): Promise<void> => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productCategoriesClient.GetAsync(id)

        setCategory(response)

        setIsLoading(false)
    }, [id])

    useEffect(() => {
        loadCategories()
    }, [loadCategories])

    return { entity: category, isLoading }
}

export default useProductCategory
