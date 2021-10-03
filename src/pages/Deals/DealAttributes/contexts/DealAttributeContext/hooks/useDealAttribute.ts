import { DealAttributeState, dealAttributeInitialState } from '../../../states/DealAttributeState'
import { useCallback, useEffect, useState } from 'react'

import DealAttributesClient from '../../../../../../../api/orders/clients/DealAttributesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const dealAttributesClient = new DealAttributesClient(HttpClientFactory.Api)

const useDealAttribute = (): DealAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(dealAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(dealAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await dealAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await dealAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useDealAttribute
