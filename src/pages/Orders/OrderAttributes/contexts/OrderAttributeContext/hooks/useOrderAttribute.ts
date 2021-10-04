import { OrderAttributeState, orderAttributeInitialState } from '../../../states/OrderAttributeState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderAttributesClient from '../../../../../../../api/orders/clients/OrderAttributesClient'
import { useParams } from 'react-router'

const orderAttributesClient = new OrderAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderAttribute = (): OrderAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(orderAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(orderAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await orderAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await orderAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useOrderAttribute
