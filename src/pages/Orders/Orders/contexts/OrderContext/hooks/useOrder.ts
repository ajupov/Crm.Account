import { OrderState, orderInitialState } from '../../../states/OrderState'
import { useCallback, useEffect, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderAttributesClient from '../../../../../../../api/orders/clients/OrderAttributesClient'
import OrdersClient from '../../../../../../../api/orders/clients/OrdersClient'
import { orderAttributesInitialState } from '../../../../OrderAttributes/states/OrderAttributesState'
import { useParams } from 'react-router'

const ordersClient = new OrdersClient(HttpClientFactory.Host, HttpClientFactory.Api)
const orderAttributesClient = new OrderAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrder = (): OrderState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(orderInitialState.isLoading)
    const [order, setOrder] = useState(orderInitialState.order)
    const [attributes, setAttributes] = useState(orderAttributesInitialState.attributes)

    const get = useCallback(async () => {
        if (!id) {
            setOrder({ ...orderInitialState.order, id: Guid.create().toString() })
            return
        }

        setIsLoading(true)

        const response = await ordersClient.GetAsync(id)

        setOrder(response)

        if (response.attributeLinks && response.attributeLinks.length > 0) {
            const ids = response.attributeLinks.map(x => x.orderAttributeId).filter(x => x) as string[]

            const attributes = await orderAttributesClient.GetListAsync(ids)

            setAttributes(attributes)
        }

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await ordersClient.CreateAsync(order)

        setIsLoading(false)
    }, [order])

    const update = useCallback(async () => {
        setIsLoading(true)

        await ordersClient.UpdateAsync(order)

        setIsLoading(false)
    }, [order])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, order, setOrder, attributes, create, update }
}

export default useOrder
