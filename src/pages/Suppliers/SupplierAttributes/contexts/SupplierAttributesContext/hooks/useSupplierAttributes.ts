import SupplierAttributesState, { supplierAttributesInitialState } from '../../../states/SupplierAttributesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierAttributesClient from '../../../../../../../api/suppliers/clients/SupplierAttributesClient'

const supplierAttributesClient = new SupplierAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplierAttributes = (): SupplierAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(supplierAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(supplierAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(supplierAttributesInitialState.attributes)
    const [total, setTotal] = useState(supplierAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(supplierAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await supplierAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await supplierAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.attributes) {
            response.attributes.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, attributes, total, lastModifyDateTime, getPagedList, getAll }
}

export default useSupplierAttributes
