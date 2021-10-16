import TaskAttributeChangesState, {
    taskAttributeChangesInitialState
} from '../../../states/TaskAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskAttributeChangesClient from '../../../../../../../api/tasks/clients/TaskAttributeChangesClient'
import { useParams } from 'react-router'

const taskAttributeChangesClient = new TaskAttributeChangesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskAttributeChanges = (): TaskAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(taskAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(taskAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(taskAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(taskAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await taskAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await taskAttributeChangesClient.GetPagedListAsync({
            ...request,
            attributeId: id,
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

export default useTaskAttributeChanges
