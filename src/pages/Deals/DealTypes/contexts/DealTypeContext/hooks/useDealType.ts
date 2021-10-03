import { DealTypeState, dealTypeInitialState } from '../../../states/DealTypeState'
import { useCallback, useEffect, useState } from 'react'

import DealTypesClient from '../../../../../../../api/orders/clients/DealTypesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const dealTypesClient = new DealTypesClient(HttpClientFactory.Api)

const useDealType = (): DealTypeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(dealTypeInitialState.isLoading)
    const [type, setType] = useState(dealTypeInitialState.type)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await dealTypesClient.GetAsync(id)

        setType(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await dealTypesClient.CreateAsync(type)

        setIsLoading(false)
    }, [type])

    const update = useCallback(async () => {
        setIsLoading(true)

        await dealTypesClient.UpdateAsync(type)

        setIsLoading(false)
    }, [type])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, type, setType, create, update }
}

export default useDealType
