import ProductCategoryChangesState, {
    productCategoryChangesInitialState
} from '../../../states/ProductCategoryChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoryChangesClient from '../../../../../../../../api/products/clients/ProductCategoryChangesClient'
import { useParams } from 'react-router'

const productCategoryChangesClient = new ProductCategoryChangesClient(HttpClientFactoryInstance.Api)

const useProductCategoryChanges = (): ProductCategoryChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(productCategoryChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(productCategoryChangesInitialState.isLoading)
    const [changes, setChanges] = useState(productCategoryChangesInitialState.changes)
    const [total, setTotal] = useState(productCategoryChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productCategoryChangesClient.GetPagedListAsync({ ...request, categoryId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await productCategoryChangesClient.GetPagedListAsync({
            ...request,
            categoryId: id,
            offset: 0,
            limit: MaxLimit
        })

        if (response.changes) {
            response.changes.forEach(v => {
                delete v.categoryId
                delete v.changerUserId
            })
        }

        setIsLoading(false)

        return response
    }, [id, request])

    useEffect(() => {
        getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useProductCategoryChanges
