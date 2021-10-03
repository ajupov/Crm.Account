import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import Customer from '../../../../../../../api/customers/models/Customer'
import CustomersClient from '../../../../../../../api/customers/clients/CustomersClient'

const customersClient = new CustomersClient(HttpClientFactory.Api)

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
