import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import Lead from '../../../../../../../api/customers/models/Lead'
import LeadsClient from '../../../../../../../api/customers/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactory.Api)

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
