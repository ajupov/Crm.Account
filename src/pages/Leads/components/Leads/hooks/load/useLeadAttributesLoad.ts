import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import LeadAttribute from '../../../../../../../api/customers/models/LeadAttribute'
import LeadAttributesClient from '../../../../../../../api/customers/clients/LeadAttributesClient'

const leadAttributesClient = new LeadAttributesClient(HttpClientFactory.Api)

interface UseLeadAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
}

const useLeadAttributesLoad = (): UseLeadAttributesLoadReturn => {
    const MaxLimit = 2147483647

    const [attributes, setAttributes] = useState<LeadAttribute[]>([])

    const loadAttributes = useCallback(async () => {
        const response = await leadAttributesClient.GetPagedListAsync({
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

    const map = useCallback((x: LeadAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const attributesAsOptions = useMemo(() => attributes.filter(x => !x.isDeleted).map(map), [attributes, map])

    return { attributesAsOptions }
}

export default useLeadAttributesLoad
