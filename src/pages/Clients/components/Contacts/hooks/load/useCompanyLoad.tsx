import { useCallback, useEffect, useState } from 'react'

import CompaniesClient from '../../../../../../../api/companies/clients/CompaniesClient'
import Company from '../../../../../../../api/companies/models/Company'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const companiesClient = new CompaniesClient(HttpClientFactoryInstance.Api)

interface UseCompanyLoadReturn {
    company?: Company
}

const useCompanyLoad = (id?: string): UseCompanyLoadReturn => {
    const [company, setCompany] = useState<Company>()

    const loadCompany = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await companiesClient.GetAsync(id)

        setCompany(response)
    }, [id])

    useEffect(() => {
        void loadCompany()
    }, [loadCompany])

    return { company }
}

export default useCompanyLoad
