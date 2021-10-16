import TaskStatusChangesState, { taskStatusChangesInitialState } from '../../../states/TaskStatusChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskStatusesChangesClient from '../../../../../../../api/tasks/clients/TaskStatusesChangesClient'
import { useParams } from 'react-router'

const taskStatusesChangesClient = new TaskStatusesChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskStatusChanges = (): TaskStatusChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(taskStatusChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(taskStatusChangesInitialState.isLoading)
    const [changes, setChanges] = useState(taskStatusChangesInitialState.changes)
    const [total, setTotal] = useState(taskStatusChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await taskStatusesChangesClient.GetPagedListAsync({ ...request, statusId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await taskStatusesChangesClient.GetPagedListAsync({
            ...request,
            statusId: id,
            offset: 0,
            limit: MaxLimit
        })

        if (response.changes) {
            response.changes.forEach(v => {
                delete v.changerUserId
            })
        }

        setIsLoading(false)

        return response
    }, [id, request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useTaskStatusChanges
