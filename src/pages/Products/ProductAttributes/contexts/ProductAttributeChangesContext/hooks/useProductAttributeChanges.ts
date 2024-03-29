import ProductAttributeChangesState, {
    productAttributeChangesInitialState
} from '../../../states/ProductAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductAttributeChangesClient from '../../../../../../../api/products/clients/ProductAttributeChangesClient'
import { useParams } from 'react-router'

const productAttributeChangesClient = new ProductAttributeChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProductAttributeChanges = (): ProductAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(productAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(productAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(productAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(productAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productAttributeChangesClient.GetPagedListAsync({
            ...request,
            attributeId: id,
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

export default useProductAttributeChanges
