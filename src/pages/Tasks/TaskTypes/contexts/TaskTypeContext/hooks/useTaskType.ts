import { TaskTypeState, taskTypeInitialState } from '../../../states/TaskTypeState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskTypesClient from '../../../../../../../api/tasks/clients/TaskTypesClient'
import { useParams } from 'react-router'

const taskTypesClient = new TaskTypesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskType = (): TaskTypeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(taskTypeInitialState.isLoading)
    const [type, setType] = useState(taskTypeInitialState.type)

    const get = useCallback(async () => {
        if (!id) {
            setType({ ...taskTypeInitialState.type, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await taskTypesClient.GetAsync(id)

        setType(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await taskTypesClient.CreateAsync(type)

        setIsLoading(false)
    }, [type])

    const update = useCallback(async () => {
        setIsLoading(true)

        await taskTypesClient.UpdateAsync(type)

        setIsLoading(false)
    }, [type])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, type, setType, create, update }
}

export default useTaskType
