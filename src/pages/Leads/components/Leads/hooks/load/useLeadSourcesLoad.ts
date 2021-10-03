import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import LeadSource from '../../../../../../../api/customers/models/LeadSource'
import LeadSourcesClient from '../../../../../../../api/customers/clients/LeadSourcesClient'

const leadSourcesClient = new LeadSourcesClient(HttpClientFactory.Api)

interface UseLeadSourcesLoadReturn {
    sourcesAsOptions: DropdownItemProps[]
}

const useLeadSourcesLoad = (): UseLeadSourcesLoadReturn => {
    const MaxLimit = 2147483647

    const [sources, setSources] = useState<LeadSource[]>([])

    const loadSources = useCallback(async () => {
        const response = await leadSourcesClient.GetPagedListAsync({
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

    const map = useCallback((x: LeadSource) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const sourcesAsOptions = useMemo(() => sources.filter(x => !x.isDeleted).map(map), [sources, map])

    return { sourcesAsOptions }
}

export default useLeadSourcesLoad
