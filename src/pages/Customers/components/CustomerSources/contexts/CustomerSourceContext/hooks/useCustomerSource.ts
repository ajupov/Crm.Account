import { CustomerSourceState, customerSourceInitialState } from '../../../states/CustomerSourceState'
import { useCallback, useEffect, useState } from 'react'

import CustomerSourcesClient from '../../../../../../../../api/customers/clients/CustomerSourcesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const customerSourcesClient = new CustomerSourcesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerSource = (): CustomerSourceState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(customerSourceInitialState.isLoading)
    const [source, setSource] = useState(customerSourceInitialState.source)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerSourcesClient.GetAsync(id)

        setSource(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await customerSourcesClient.CreateAsync(source)

        setIsLoading(false)
    }, [source])

    const update = useCallback(async () => {
        setIsLoading(true)

        await customerSourcesClient.UpdateAsync(source)

        setIsLoading(false)
    }, [source])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, source, setSource, create, update }
}

export default useCustomerSource
