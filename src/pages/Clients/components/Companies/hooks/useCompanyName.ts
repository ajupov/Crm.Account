import { useCallback, useEffect, useState } from 'react'

import CompaniesClient from '../../../../../../api/companies/clients/CompaniesClient'
import Company from '../../../../../../api/companies/models/Company'
import HttpClientFactoryInstance from '../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const companiesClient = new CompaniesClient(HttpClientFactoryInstance.Api)

interface UseCompanyNameReturn {
    getCompanyName: () => string
}

// TODO: Move to l10n
const useCompanyName = (id?: string): UseCompanyNameReturn => {
    const [company, setCompany] = useState<Company>()

    const getCompany = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await companiesClient.GetAsync(id)

        setCompany(response)
    }, [id])

    const getCompanyName = useCallback(() => company?.fullName ?? company?.shortName ?? '', [company])

    useEffect(() => {
        getCompany()
    }, [getCompany])

    return { getCompanyName }
}

export default useCompanyName
