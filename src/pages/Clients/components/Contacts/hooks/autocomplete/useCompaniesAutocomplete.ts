import { useCallback, useMemo, useState } from 'react'

import CompaniesClient from '../../../../../../../api/companies/clients/CompaniesClient'
import Company from '../../../../../../../api/companies/models/Company'
import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const companiesClient = new CompaniesClient(HttpClientFactoryInstance.Api)

interface UseCompaniesAutocompleteReturn {
    loadCompanies: (value?: string) => Promise<void>
    companiesAsOptions: DropdownItemProps[]
}

const useCompaniesAutocomplete = (): UseCompaniesAutocompleteReturn => {
    const MaxLimit = 10

    const [companies, setCompanies] = useState<Company[]>([])

    const loadCompanies = useCallback(async (value?: string) => {
        const response = await companiesClient.GetPagedListAsync({
            fullName: value,
            sortBy: 'FullName',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setCompanies(response.companies ?? [])
    }, [])

    const map = useCallback((x: Company) => ({ value: x.id ?? '', text: x.fullName ?? '' }), [])

    const companiesAsOptions = useMemo(() => companies.map(map), [map, companies])

    return { loadCompanies, companiesAsOptions }
}

export default useCompaniesAutocomplete
