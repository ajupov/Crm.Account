import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import Customer from '../../../../../../../api/customers/models/Customer'
import CustomersClient from '../../../../../../../api/customers/clients/CustomersClient'

const customersClient = new CustomersClient(HttpClientFactory.Api)

interface UseCustomersAutocompleteReturn {
    loadCustomers: (value?: string) => Promise<void>
    customersAsOptions: DropdownItemProps[]
}

const useCustomersAutocomplete = (): UseCustomersAutocompleteReturn => {
    const MaxLimit = 10

    const [customers, setCustomers] = useState<Customer[]>([])

    const loadCustomers = useCallback(async (value?: string) => {
        const response = await customersClient.GetPagedListAsync({
            name: value,
            sortBy: 'Name',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setCustomers(response.customers ?? [])
    }, [])

    const map = useCallback(
        (x: Customer) => ({
            value: x.id ?? '',
            text: x?.name ? `${x?.surname} ${x?.name} ${x?.patronymic}`.trim() : ''
        }),
        []
    )

    const customersAsOptions = useMemo(() => customers.map(map), [map, customers])

    return { loadCustomers, customersAsOptions }
}

export default useCustomersAutocomplete
