import { useCallback, useEffect, useState } from 'react'

import Create from '../../../utils/httpClient/Create'
import ProductCategoriesClient from '../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../api/products/models/ProductCategory'

interface UseProductCategoriesReturn {
    totalCount: number
    lastModifyDateTime: string
    categories: ProductCategory[]
}

const useProductCategories = (offset: number, limit: number): UseProductCategoriesReturn => {
    const httpClientFactory = Create.HttpClientFactory.WithApiUrl().Build()

    const productCategoriesClient = new ProductCategoriesClient(httpClientFactory)

    const [totalCount, setTotalCount] = useState<number>(0)
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string>('')
    const [categories, setCategories] = useState<ProductCategory[]>([])

    const loadCategories = useCallback(async (): Promise<void> => {
        const response = await productCategoriesClient.GetPagedListAsync({ offset, limit, isDeleted: false })

        setTotalCount(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')
        setCategories(response.categories ?? [])
    }, [productCategoriesClient, offset, limit])

    useEffect(() => {
        loadCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { totalCount, lastModifyDateTime, categories }
}

export default useProductCategories
