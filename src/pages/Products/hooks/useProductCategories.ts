import { useCallback, useEffect, useState } from 'react'

import Configuration from '../../../configuration/Configuration'
import Create from '../../../utils/httpClient/Create'
import ProductCategoriesClient from '../../../../.generated/litecrm_api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../.generated/litecrm_api/products/models/ProductCategory'

const useProductCategories = (offset: number, limit: number): ProductCategory[] => {
    const configuration = new Configuration()
    const httpClientFactory = Create.HttpClientFactory.WithHost(configuration.ApiUrl).Build()
    const productCategoriesClient = new ProductCategoriesClient(httpClientFactory)

    const [categories, setCategories] = useState<ProductCategory[]>([])

    const loadCategories = useCallback(async (): Promise<void> => {
        const categories = await productCategoriesClient.GetPagedListAsync({ offset, limit, isDeleted: false })

        setCategories(categories)
    }, [offset, limit, productCategoriesClient])

    useEffect(() => {
        loadCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return categories
}

export default useProductCategories
