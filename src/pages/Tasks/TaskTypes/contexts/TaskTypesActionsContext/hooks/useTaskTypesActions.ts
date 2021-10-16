import TaskTypesActionsState, { taskTypesActionsInitialState } from '../../../states/TaskTypesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskTypesClient from '../../../../../../../api/tasks/clients/TaskTypesClient'

const taskTypesClient = new TaskTypesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskTypesActions = (): TaskTypesActionsState => {
    const [ids, setIds] = useState(taskTypesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(taskTypesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(taskTypesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(taskTypesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await taskTypesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await taskTypesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useTaskTypesActions
