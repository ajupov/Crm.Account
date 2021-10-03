import CompanyAttributesState, { companyAttributesInitialState } from '../../../states/CompanyAttributesState'
import { useCallback, useEffect, useState } from 'react'

import CompanyAttributesClient from '../../../../../../../../api/companies/clients/CompanyAttributesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'

const companyAttributesClient = new CompanyAttributesClient(HttpClientFactory.Api)

const useCompanyAttributes = (): CompanyAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(companyAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(companyAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(companyAttributesInitialState.attributes)
    const [total, setTotal] = useState(companyAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(companyAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await companyAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await companyAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
        if (response.attributes) {
            response.attributes.forEach(v => {
                delete v.accountId
            })
        }

        setIsLoading(false)

        return response
    }, [request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, attributes, total, lastModifyDateTime, getPagedList, getAll }
}

export default useCompanyAttributes
