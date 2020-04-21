import ProductCategoriesState, { productCategoriesInitialState } from '../../../states/ProductCategoriesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../../api/products/clients/ProductCategoriesClient'
import ProductCategory from '../../../../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../../../../api/products/models/ProductCategoryGetPagedListRequest'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategories = (): ProductCategoriesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState<ProductCategoryGetPagedListRequest>(productCategoriesInitialState.request)
    const [isLoading, setIsLoading] = useState<boolean>(productCategoriesInitialState.isLoading)
    const [categories, setCategories] = useState<ProductCategory[]>(productCategoriesInitialState.categories)
    const [total, setTotal] = useState<number>(productCategoriesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState<string>(
        productCategoriesInitialState.lastModifyDateTime
    )

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await productCategoriesClient.GetPagedListAsync(request)

        setCategories(response.categories ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await productCategoriesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.categories) {
            response.categories.forEach(v => delete v.accountId)
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, categories, total, lastModifyDateTime, getAll }
}

export default useProductCategories
