import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Lead from '../../../../../../../api/leads/models/Lead'
import LeadsClient from '../../../../../../../api/leads/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactoryInstance.Api)

interface UseLeadsAutocompleteReturn {
    loadLeads: (value?: string) => Promise<void>
    leadsAsOptions: DropdownItemProps[]
}

const useLeadsAutocomplete = (): UseLeadsAutocompleteReturn => {
    const MaxLimit = 10

    const [leads, setLeads] = useState<Lead[]>([])

    const loadLeads = useCallback(async (value?: string) => {
        const response = await leadsClient.GetPagedListAsync({
            name: value,
            sortBy: 'Name',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setLeads(response.leads ?? [])
    }, [])

    const map = useCallback(
        (x: Lead) => ({ value: x.id ?? '', text: x?.name ? `${x?.surname} ${x?.name} ${x?.patronymic}`.trim() : '' }),
        []
    )

    const leadsAsOptions = useMemo(() => leads.map(map), [map, leads])

    return { loadLeads, leadsAsOptions }
}

export default useLeadsAutocomplete
