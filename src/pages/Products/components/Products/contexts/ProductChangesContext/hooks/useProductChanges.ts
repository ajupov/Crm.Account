import ProductChangesState, { productChangesInitialState } from '../../../states/ProductChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductChangesClient from '../../../../../../../../api/products/clients/ProductChangesClient'
import { useParams } from 'react-router'

const productChangesClient = new ProductChangesClient(HttpClientFactoryInstance.Api)

const useProductChanges = (): ProductChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(productChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(productChangesInitialState.isLoading)
    const [changes, setChanges] = useState(productChangesInitialState.changes)
    const [total, setTotal] = useState(productChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productChangesClient.GetPagedListAsync({ ...request, productId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productChangesClient.GetPagedListAsync({
            ...request,
            productId: id,
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

export default useProductChanges
