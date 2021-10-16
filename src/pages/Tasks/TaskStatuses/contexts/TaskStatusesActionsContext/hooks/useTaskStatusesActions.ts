import TaskStatusesActionsState, { taskStatusesActionsInitialState } from '../../../states/TaskStatusesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskStatusesClient from '../../../../../../../api/tasks/clients/TaskStatusesClient'

const taskStatusesClient = new TaskStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskStatusesActions = (): TaskStatusesActionsState => {
    const [ids, setIds] = useState(taskStatusesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(taskStatusesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(taskStatusesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(taskStatusesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await taskStatusesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await taskStatusesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useTaskStatusesActions
