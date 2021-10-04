import { useCallback, useEffect, useMemo, useState } from 'react'

import CustomerSource from '../../../../../../../api/customers/models/CustomerSource'
import CustomerSourcesClient from '../../../../../../../api/customers/clients/CustomerSourcesClient'
import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const customerSourcesClient = new CustomerSourcesClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseCustomerSourcesLoadReturn {
    sourcesAsOptions: DropdownItemProps[]
}

const useCustomerSourcesLoad = (): UseCustomerSourcesLoadReturn => {
    const MaxLimit = 2147483647

    const [sources, setSources] = useState<CustomerSource[]>([])

    const loadSources = useCallback(async () => {
        const response = await customerSourcesClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setSources(response.sources ?? [])
    }, [])

    useEffect(() => {
        void loadSources()
    }, [loadSources])

    const map = useCallback((x: CustomerSource) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const sourcesAsOptions = useMemo(() => sources.filter(x => !x.isDeleted).map(map), [sources, map])

    return { sourcesAsOptions }
}

export default useCustomerSourcesLoad
