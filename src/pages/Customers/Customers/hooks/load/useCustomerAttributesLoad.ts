import { useCallback, useEffect, useMemo, useState } from 'react'

import CustomerAttribute from '../../../../../../../api/customers/models/CustomerAttribute'
import CustomerAttributesClient from '../../../../../../../api/customers/clients/CustomerAttributesClient'
import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const customerAttributesClient = new CustomerAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseCustomerAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
}

const useCustomerAttributesLoad = (): UseCustomerAttributesLoadReturn => {
    const MaxLimit = 2147483647

    const [attributes, setAttributes] = useState<CustomerAttribute[]>([])

    const loadAttributes = useCallback(async () => {
        const response = await customerAttributesClient.GetPagedListAsync({
            sortBy: 'Key',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(response.attributes ?? [])
    }, [])

    useEffect(() => {
        void loadAttributes()
    }, [loadAttributes])

    const map = useCallback((x: CustomerAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const attributesAsOptions = useMemo(() => attributes.filter(x => !x.isDeleted).map(map), [attributes, map])

    return { attributesAsOptions }
}

export default useCustomerAttributesLoad
