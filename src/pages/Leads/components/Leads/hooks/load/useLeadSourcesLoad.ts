import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadSource from '../../../../../../../api/leads/models/LeadSource'
import LeadSourcesClient from '../../../../../../../api/leads/clients/LeadSourcesClient'

const leadSourcesClient = new LeadSourcesClient(HttpClientFactoryInstance.Api)

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
