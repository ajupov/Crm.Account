import SuppliersActionsState, { suppliersActionsInitialState } from '../../../states/SuppliersActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SuppliersClient from '../../../../../../../api/suppliers/clients/SuppliersClient'

const suppliersClient = new SuppliersClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSuppliersActions = (): SuppliersActionsState => {
    const [ids, setIds] = useState(suppliersActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(suppliersActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(suppliersActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(suppliersActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await suppliersClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await suppliersClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useSuppliersActions
