import { useCallback, useEffect, useState } from 'react'
import useProductCategoriesPaging, { PagingParams } from './useProductCategoriesPaging'

import HttpClientFactoryInstance from '../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../api/products/models/ProductCategoryGetPagedListRequest'
import { SortingParams } from './useProductCategoriesSorting'
import useProductCategoriesMeta from './useProductCategoriesMeta'

interface UseProductCategoriesReturn {
    isLoading: boolean
    categories?: ProductCategory[]
    request?: ProductCategoryGetPagedListRequest
    setRequest: (request: ProductCategoryGetPagedListRequest) => void
}

type ProductCategoryGetPagedListRequest = Exclude<ProductCategoryGetPagedListRequest, keyof PagingParams>
type ProductCategoryGetPagedListRequestStrict = Exclude<NewType, keyof SortingParams>

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategories = (): UseProductCategoriesReturn => {
    const { setTotal } = useProductCategoriesPaging()
    const { setLastModifyDateTime } = useProductCategoriesMeta()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<ProductCategory[] | undefined>([])
    const [request, setRequest] = useState<ProductCategoryGetPagedListRequest | undefined>()

    const load = useCallback(async () => {
        setIsLoading(true)

        const response = await productCategoriesClient.GetPagedListAsync(request)

        setCategories(response.categories)

        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime)

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    useEffect(() => {
        load()
    }, [load])

    return {
        isLoading,
        categories,
        request,
        setRequest
    }
}

export default useProductCategories
