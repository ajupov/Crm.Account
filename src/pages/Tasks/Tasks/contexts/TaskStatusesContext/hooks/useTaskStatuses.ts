import TaskStatusesState, { taskStatusesInitialState } from '../../../states/TaskStatusesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskStatusesClient from '../../../../../../../api/tasks/clients/TaskStatusesClient'

const taskStatusesClient = new TaskStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskStatuses = (): TaskStatusesState => {
    const MaxLimit = 2147483647

    const [isLoading, setIsLoading] = useState(taskStatusesInitialState.isLoading)
    const [statuses, setStatuses] = useState(taskStatusesInitialState.statuses)

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await taskStatusesClient.GetPagedListAsync({
            isDeleted: false,
            limit: MaxLimit,
            offset: 0,
            sortBy: 'IsFinish',
            orderBy: 'asc'
        })

        setStatuses(response.statuses ?? [])

        setIsLoading(false)
    }, [])

    useEffect(() => {
        void getAll()
    }, [getAll])

    return { isLoading, statuses, getAll }
}

export default useTaskStatuses
