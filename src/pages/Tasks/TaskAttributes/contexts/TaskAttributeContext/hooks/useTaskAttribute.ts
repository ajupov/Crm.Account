import { TaskAttributeState, taskAttributeInitialState } from '../../../states/TaskAttributeState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import TaskAttributesClient from '../../../../../../../api/tasks/clients/TaskAttributesClient'
import { useParams } from 'react-router'

const taskAttributesClient = new TaskAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useTaskAttribute = (): TaskAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(taskAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(taskAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            setAttribute({ ...taskAttributeInitialState.attribute, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await taskAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await taskAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await taskAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useTaskAttribute
