import TaskTypesState, { taskTypesInitialState } from '../../../states/TaskTypesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskTypesClient from '../../../../../../../api/tasks/clients/TaskTypesClient'

const taskTypesClient = new TaskTypesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskTypes = (): TaskTypesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(taskTypesInitialState.request)
    const [isLoading, setIsLoading] = useState(taskTypesInitialState.isLoading)
    const [types, setTypes] = useState(taskTypesInitialState.types)
    const [total, setTotal] = useState(taskTypesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(taskTypesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await taskTypesClient.GetPagedListAsync(request)

        setTypes(response.types ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await taskTypesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.types) {
            response.types.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, types, total, lastModifyDateTime, getPagedList, getAll }
}

export default useTaskTypes
