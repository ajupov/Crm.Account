import TaskAttributesActionsState, {
    taskAttributesActionsInitialState
} from '../../../states/TaskAttributesActionsState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskAttributesClient from '../../../../../../../api/tasks/clients/TaskAttributesClient'

const taskAttributesClient = new TaskAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskAttributesActions = (): TaskAttributesActionsState => {
    const [ids, setIds] = useState(taskAttributesActionsInitialState.ids)
    const [isLoading, setIsLoading] = useState(taskAttributesActionsInitialState.isLoading)
    const [isDeleting, setIsDeleting] = useState(taskAttributesActionsInitialState.isDeleting)
    const [isRestoring, setIsRestoring] = useState(taskAttributesActionsInitialState.isRestoring)

    const _delete = useCallback(async () => {
        setIsLoading(true)

        await taskAttributesClient.DeleteAsync(ids)

        setIsDeleting(false)
        setIsLoading(false)
    }, [ids])

    const restore = useCallback(async () => {
        setIsLoading(true)

        await taskAttributesClient.RestoreAsync(ids)

        setIsRestoring(false)
        setIsLoading(false)
    }, [ids])

    return { isLoading, ids, setIds, isDeleting, setIsDeleting, delete: _delete, isRestoring, setIsRestoring, restore }
}

export default useTaskAttributesActions
