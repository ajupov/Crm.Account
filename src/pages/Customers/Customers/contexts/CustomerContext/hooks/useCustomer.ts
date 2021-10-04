import { CustomerState, customerInitialState } from '../../../states/CustomerState'
import { useCallback, useEffect, useState } from 'react'

import CustomerAttributesClient from '../../../../../../../../api/customers/clients/CustomerAttributesClient'
import CustomersClient from '../../../../../../../../api/customers/clients/CustomersClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import { customerAttributesInitialState } from '../../../../CustomerAttributes/states/CustomerAttributesState'
import { useParams } from 'react-router'

const customersClient = new CustomersClient(HttpClientFactory.Host, HttpClientFactory.Api)
const customerAttributesClient = new CustomerAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomer = (): CustomerState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(customerInitialState.isLoading)
    const [customer, setCustomer] = useState(customerInitialState.customer)
    const [attributes, setAttributes] = useState(customerAttributesInitialState.attributes)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await customersClient.GetAsync(id)

        setCustomer(response)

        if (response.attributeLinks && response.attributeLinks.length > 0) {
            const ids = response.attributeLinks.map(x => x.customerAttributeId).filter(x => x) as string[]

            const attributes = await customerAttributesClient.GetListAsync(ids)

            setAttributes(attributes)
        }

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await customersClient.CreateAsync(customer)

        setIsLoading(false)
    }, [customer])

    const update = useCallback(async () => {
        setIsLoading(true)

        await customersClient.UpdateAsync(customer)

        setIsLoading(false)
    }, [customer])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, customer, setCustomer, attributes, create, update }
}

export default useCustomer
