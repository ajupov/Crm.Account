import { useCallback, useEffect, useMemo, useState } from 'react'

import CompanyAttribute from '../../../../../../../api/companies/models/CompanyAttribute'
import CompanyAttributesClient from '../../../../../../../api/companies/clients/CompanyAttributesClient'
import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const companyAttributesClient = new CompanyAttributesClient(HttpClientFactory.Api)

interface UseCompanyAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
}

const useCompanyAttributesLoad = (): UseCompanyAttributesLoadReturn => {
    const MaxLimit = 2147483647

    const [attributes, setAttributes] = useState<CompanyAttribute[]>([])

    const loadAttributes = useCallback(async () => {
        const response = await companyAttributesClient.GetPagedListAsync({
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

    const map = useCallback((x: CompanyAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const attributesAsOptions = useMemo(() => attributes.filter(x => !x.isDeleted).map(map), [attributes, map])

    return { attributesAsOptions }
}

export default useCompanyAttributesLoad
