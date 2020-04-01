import ProductCategories, { productCategoriesInitial } from '../contexts/ProductCategories'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../api/products/models/ProductCategoryGetPagedListRequest'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategories = (): ProductCategories => {
    const [request, setRequest] = useState<ProductCategoryGetPagedListRequest>(productCategoriesInitial.request)
    const [isLoading, setIsLoading] = useState<boolean>(productCategoriesInitial.isLoading)
    const [categories, setCategories] = useState<ProductCategory[]>(productCategoriesInitial.categories)
    const [total, setTotal] = useState<number>(productCategoriesInitial.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string>(productCategoriesInitial.lastModifyDateTime)

    const load = useCallback(async () => {
        setIsLoading(true)

        const response = await productCategoriesClient.GetPagedListAsync(request)

        setCategories(response.categories ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

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
