import ProductStatusesActionsState, {
    productStatusesActionsInitialState
} from '../../../states/ProductStatusesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import ProductStatusesClient from '../../../../../../../../api/products/clients/ProductStatusesClient'

const productStatusesClient = new ProductStatusesClient(HttpClientFactory.Api)

const useProductStatusesActions = (): ProductStatusesActionsState => {
    const [ids, setIds] = useState(productStatusesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(productStatusesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(productStatusesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(productStatusesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await productStatusesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await productStatusesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useProductStatusesActions
