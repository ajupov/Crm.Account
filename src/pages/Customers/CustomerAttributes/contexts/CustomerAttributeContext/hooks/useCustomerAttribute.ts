import { CustomerAttributeState, customerAttributeInitialState } from '../../../states/CustomerAttributeState'
import { useCallback, useEffect, useState } from 'react'

import CustomerAttributesClient from '../../../../../../../api/customers/clients/CustomerAttributesClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const customerAttributesClient = new CustomerAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerAttribute = (): CustomerAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(customerAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(customerAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customerAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await customerAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await customerAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useCustomerAttribute
