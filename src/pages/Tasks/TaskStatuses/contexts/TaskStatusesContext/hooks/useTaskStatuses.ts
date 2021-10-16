import TaskStatusesState, { taskStatusesInitialState } from '../../../states/TaskStatusesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskStatusesClient from '../../../../../../../api/tasks/clients/TaskStatusesClient'

const taskStatusesClient = new TaskStatusesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskStatuses = (): TaskStatusesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(taskStatusesInitialState.request)
    const [isLoading, setIsLoading] = useState(taskStatusesInitialState.isLoading)
    const [statuses, setStatuses] = useState(taskStatusesInitialState.statuses)
    const [total, setTotal] = useState(taskStatusesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(taskStatusesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await taskStatusesClient.GetPagedListAsync(request)

        setStatuses(response.statuses ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await taskStatusesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.statuses) {
            response.statuses.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, statuses, total, lastModifyDateTime, getPagedList, getAll }
}

export default useTaskStatuses
