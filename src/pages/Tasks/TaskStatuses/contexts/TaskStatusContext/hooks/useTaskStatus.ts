import { TaskStatusState, taskStatusInitialState } from '../../../states/TaskStatusState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskStatusesClient from '../../../../../../../api/tasks/clients/TaskStatusesClient'
import { useParams } from 'react-router'

const taskStatusesClient = new TaskStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskStatus = (): TaskStatusState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(taskStatusInitialState.isLoading)
    const [status, setStatus] = useState(taskStatusInitialState.status)

    const get = useCallback(async () => {
        if (!id) {
            setStatus({ ...taskStatusInitialState.status, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await taskStatusesClient.GetAsync(id)

        setStatus(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await taskStatusesClient.CreateAsync(status)

        setIsLoading(false)
    }, [status])

    const update = useCallback(async () => {
        setIsLoading(true)

        await taskStatusesClient.UpdateAsync(status)

        setIsLoading(false)
    }, [status])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, status, setStatus, create, update }
}

export default useTaskStatus
