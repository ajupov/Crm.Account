import CompaniesState, { conactsInitialState } from '../../../states/CompaniesState'
import { useCallback, useEffect, useState } from 'react'

import CompaniesClient from '../../../../../../../../api/companies/clients/CompaniesClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const companiesClient = new CompaniesClient(HttpClientFactoryInstance.Api)

const useCompanies = (): CompaniesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(conactsInitialState.request)
    const [isLoading, setIsLoading] = useState(conactsInitialState.isLoading)
    const [companies, setCompanies] = useState(conactsInitialState.companies)
    const [total, setTotal] = useState(conactsInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(conactsInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await companiesClient.GetPagedListAsync(request)

        setCompanies(response.companies ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await companiesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.companies) {
            response.companies.forEach(v => {
                delete v.accountId
                delete v.createUserId
                delete v.responsibleUserId
                delete v.bankAccounts
                delete v.attributeLinks
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, companies, total, lastModifyDateTime, getPagedList, getAll }
}

export default useCompanies
