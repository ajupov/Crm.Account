import ProductAttributesState, { productAttributesInitialState } from '../../../states/ProductAttributesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductAttributesClient from '../../../../../../../../api/products/clients/ProductAttributesClient'

const productAttributesClient = new ProductAttributesClient(HttpClientFactoryInstance.Api)

const useProductAttributes = (): ProductAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(productAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(productAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(productAttributesInitialState.attributes)
    const [total, setTotal] = useState(productAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(productAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await productAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await productAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.attributes) {
            response.attributes.forEach(v => delete v.accountId)
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, attributes, total, lastModifyDateTime, getPagedList, getAll }
}

export default useProductAttributes
