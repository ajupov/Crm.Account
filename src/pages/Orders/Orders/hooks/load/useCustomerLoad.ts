import { useCallback, useEffect, useState } from 'react'

import Customer from '../../../../../../api/customers/models/Customer'
import CustomersClient from '../../../../../../api/customers/clients/CustomersClient'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'

const customersClient = new CustomersClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseCustomerLoadReturn {
    customer?: Customer
}

const useCustomerLoad = (id?: string): UseCustomerLoadReturn => {
    const [customer, setCustomer] = useState<Customer>()

    const loadCustomer = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await customersClient.GetAsync(id)

        setCustomer(response)
    }, [id])

    useEffect(() => {
        void loadCustomer()
    }, [loadCustomer])

    return { customer }
}

export default useCustomerLoad
