import TasksState, { tasksInitialState } from '../../../states/TasksState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TasksClient from '../../../../../../../api/tasks/clients/TasksClient'

const tasksClient = new TasksClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTasks = (): TasksState => {
    const MaxLimit = 2147483647

    const [isLoading, setIsLoading] = useState(tasksInitialState.isLoading)
    const [tasks, setTasks] = useState(tasksInitialState.tasks)

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await tasksClient.GetPagedListAsync({
            isDeleted: false,
            limit: MaxLimit,
            offset: 0,
            sortBy: 'CreateDateTime',
            orderBy: 'desc'
        })

        setTasks(response.tasks ?? [])

        setIsLoading(false)
    }, [])

    useEffect(() => {
        void getAll()
    }, [getAll])

    return { isLoading, tasks, getAll }
}

export default useTasks
