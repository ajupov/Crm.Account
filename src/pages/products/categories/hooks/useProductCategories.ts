import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategories from '../contexts/ProductCategories'
import ProductCategoriesClient from '../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../api/products/models/ProductCategoryGetPagedListRequest'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategories = (): ProductCategories => {
    const [request, setRequest] = useState<ProductCategoryGetPagedListRequest>({
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<ProductCategory[]>([])
    const [total, setTotal] = useState<number>(0)
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string | undefined>()

    const load = useCallback(async () => {
        setIsLoading(true)

        const response = await productCategoriesClient.GetPagedListAsync(request)

        setCategories(response.categories ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime)

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    useEffect(() => {
        load()
    }, [load])

    return {
        request,
        setRequest,
        isLoading,
        categories,
        total,
        lastModifyDateTime
    }
}

export default useProductCategories
