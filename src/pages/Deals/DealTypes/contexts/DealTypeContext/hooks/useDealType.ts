import { OrderTypeState, orderTypeInitialState } from '../../../states/OrderTypeState'
import { useCallback, useEffect, useState } from 'react'

import OrderTypesClient from '../../../../../../../api/orders/clients/OrderTypesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const orderTypesClient = new OrderTypesClient(HttpClientFactory.Api)

const useOrderType = (): OrderTypeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(orderTypeInitialState.isLoading)
    const [type, setType] = useState(orderTypeInitialState.type)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await orderTypesClient.GetAsync(id)

        setType(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await orderTypesClient.CreateAsync(type)

        setIsLoading(false)
    }, [type])

    const update = useCallback(async () => {
        setIsLoading(true)

        await orderTypesClient.UpdateAsync(type)

        setIsLoading(false)
    }, [type])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, type, setType, create, update }
}

export default useOrderType
