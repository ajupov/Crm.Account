import ProductStatusChangesState, { productStatusChangesInitialState } from '../../../states/ProductStatusChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductStatusesChangesClient from '../../../../../../../api/products/clients/ProductStatusesChangesClient'
import { useParams } from 'react-router'

const productStatusesChangesClient = new ProductStatusesChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProductStatusChanges = (): ProductStatusChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(productStatusChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(productStatusChangesInitialState.isLoading)
    const [changes, setChanges] = useState(productStatusChangesInitialState.changes)
    const [total, setTotal] = useState(productStatusChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productStatusesChangesClient.GetPagedListAsync({ ...request, statusId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productStatusesChangesClient.GetPagedListAsync({
            ...request,
            statusId: id,
            offset: 0,
            limit: MaxLimit
        })

        if (response.changes) {
            response.changes.forEach(v => {
                delete v.changerUserId
            })
        }

        setIsLoading(false)

        return response
    }, [id, request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useProductStatusChanges
