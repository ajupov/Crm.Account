import ProductsActionsState, { productsActionsInitialState } from '../../../states/ProductsActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductsClient from '../../../../../../../api/products/clients/ProductsClient'

const productsClient = new ProductsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProductsActions = (): ProductsActionsState => {
    const [ids, setIds] = useState(productsActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(productsActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(productsActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(productsActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await productsClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await productsClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useProductsActions
