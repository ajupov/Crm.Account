import ProductCategoriesActionsState, {
    productCategoriesActionsInitialState
} from '../../../states/ProductCategoriesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductCategoriesClient from '../../../../../../../api/products/clients/ProductCategoriesClient'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useProductCategoriesActions = (): ProductCategoriesActionsState => {
    const [ids, setIds] = useState(productCategoriesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(productCategoriesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(productCategoriesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(productCategoriesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await productCategoriesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await productCategoriesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useProductCategoriesActions
