import ProductCategoriesState, { productCategoriesInitialState } from '../../../states/ProductCategoriesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductCategoriesClient from '../../../../../../../api/products/clients/ProductCategoriesClient'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactory.Host, HttpClientFactory.Api)

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
            response.categories.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, categories, total, lastModifyDateTime, getPagedList, getAll }
}

export default useProductCategories
