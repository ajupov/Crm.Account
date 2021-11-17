import SupplierAttributesActionsState, {
    supplierAttributesActionsInitialState
} from '../../../states/SupplierAttributesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierAttributesClient from '../../../../../../../api/suppliers/clients/SupplierAttributesClient'

const supplierAttributesClient = new SupplierAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplierAttributesActions = (): SupplierAttributesActionsState => {
    const [ids, setIds] = useState(supplierAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(supplierAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(supplierAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(supplierAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await supplierAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await supplierAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useSupplierAttributesActions
