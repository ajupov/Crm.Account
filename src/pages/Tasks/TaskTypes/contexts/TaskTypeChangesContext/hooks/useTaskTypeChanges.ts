import TaskTypeChangesState, { taskTypeChangesInitialState } from '../../../states/TaskTypeChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskTypesChangesClient from '../../../../../../../api/tasks/clients/TaskTypesChangesClient'
import { useParams } from 'react-router'

const taskTypesChangesClient = new TaskTypesChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskTypeChanges = (): TaskTypeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(taskTypeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(taskTypeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(taskTypeChangesInitialState.changes)
    const [total, setTotal] = useState(taskTypeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await taskTypesChangesClient.GetPagedListAsync({ ...request, typeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await taskTypesChangesClient.GetPagedListAsync({
            ...request,
            typeId: id,
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

export default useTaskTypeChanges
