import ProductAttributesActionsState, {
    productAttributesActionsInitialState
} from '../../../states/ProductAttributesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import ProductAttributesClient from '../../../../../../../../api/products/clients/ProductAttributesClient'

const productAttributesClient = new ProductAttributesClient(HttpClientFactoryInstance.Api)

const useProductAttributesActions = (): ProductAttributesActionsState => {
    const [ids, setIds] = useState(productAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(productAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(productAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(productAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await productAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await productAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useProductAttributesActions
