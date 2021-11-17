import SuppliersState, { conactsInitialState } from '../../../states/SuppliersState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SuppliersClient from '../../../../../../../api/suppliers/clients/SuppliersClient'

const suppliersClient = new SuppliersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSuppliers = (): SuppliersState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(conactsInitialState.request)
    const [isLoading, setIsLoading] = useState(conactsInitialState.isLoading)
    const [suppliers, setSuppliers] = useState(conactsInitialState.suppliers)
    const [total, setTotal] = useState(conactsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(conactsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await suppliersClient.GetPagedListAsync(request)

        setSuppliers(response.suppliers ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await suppliersClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.suppliers) {
            response.suppliers.forEach(v => {
                delete v.accountId
                delete v.createUserId
                delete v.attributeLinks
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, suppliers, total, lastModifyDateTime, getPagedList, getAll }
}

export default useSuppliers
