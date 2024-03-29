import ProductsState, { productsInitialState } from '../../../states/ProductsState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductsClient from '../../../../../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProducts = (): ProductsState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(productsInitialState.request)
    const [isLoading, setIsLoading] = useState(productsInitialState.isLoading)
    const [products, setProducts] = useState(productsInitialState.products)
    const [total, setTotal] = useState(productsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(productsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await productsClient.GetPagedListAsync(request)

        setProducts(response.products ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await productsClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.products) {
            response.products.forEach(v => {
                delete v.accountId
                delete v.parentProductId
                delete v.statusId
                delete v.image
                delete v.status
                delete v.attributeLinks
                delete v.categoryLinks
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, products, total, lastModifyDateTime, getPagedList, getAll }
}

export default useProducts
