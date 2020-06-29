import ProductStatusesState, { productStatusesInitialState } from '../../../states/ProductStatusesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductStatusesClient from '../../../../../../../../api/products/clients/ProductStatusesClient'

const productStatusesClient = new ProductStatusesClient(HttpClientFactoryInstance.Api)

const useProductStatuses = (): ProductStatusesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(productStatusesInitialState.request)
    const [isLoading, setIsLoading] = useState(productStatusesInitialState.isLoading)
    const [statuses, setStatuses] = useState(productStatusesInitialState.statuses)
    const [total, setTotal] = useState(productStatusesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(productStatusesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await productStatusesClient.GetPagedListAsync(request)

        setStatuses(response.statuses ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await productStatusesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.statuses) {
            response.statuses.forEach(v => delete v.accountId)
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, statuses, total, lastModifyDateTime, getPagedList, getAll }
}

export default useProductStatuses
