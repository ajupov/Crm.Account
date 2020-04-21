import ProductCategoriesState, { productCategoriesInitialState } from '../../../states/ProductCategoriesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../../api/products/clients/ProductCategoriesClient'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategories = (): ProductCategoriesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(productCategoriesInitialState.request)
    const [isLoading, setIsLoading] = useState(productCategoriesInitialState.isLoading)
    const [categories, setCategories] = useState(productCategoriesInitialState.categories)
    const [total, setTotal] = useState(productCategoriesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(productCategoriesInitialState.lastModifyDateTime)

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
