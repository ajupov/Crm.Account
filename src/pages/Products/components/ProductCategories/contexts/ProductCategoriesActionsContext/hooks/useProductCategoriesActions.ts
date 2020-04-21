import ProductCategoriesActionsState, {
    productCategoriesActionsInitialState
} from '../../../states/ProductCategoriesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductCategoriesClient from '../../../../../../../../api/products/clients/ProductCategoriesClient'

const productCategoriesClient = new ProductCategoriesClient(HttpClientFactoryInstance.Api)

const useProductCategoriesActions = (): ProductCategoriesActionsState => {
    const [ids, setIds] = useState<string[]>([])
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

    return { isLoading, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useProductCategoriesActions
