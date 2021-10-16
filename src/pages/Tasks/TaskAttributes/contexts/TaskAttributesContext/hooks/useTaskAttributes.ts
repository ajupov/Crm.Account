import TaskAttributesState, { taskAttributesInitialState } from '../../../states/TaskAttributesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskAttributesClient from '../../../../../../../api/tasks/clients/TaskAttributesClient'

const taskAttributesClient = new TaskAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskAttributes = (): TaskAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(taskAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(taskAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(taskAttributesInitialState.attributes)
    const [total, setTotal] = useState(taskAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(taskAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await taskAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await taskAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.attributes) {
            response.attributes.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, attributes, total, lastModifyDateTime, getPagedList, getAll }
}

export default useTaskAttributes
