import CompanyChangesState, { companyChangesInitialState } from '../../../states/CompanyChangesState'
import { useCallback, useEffect, useState } from 'react'

import CompanyChangesClient from '../../../../../../../../api/companies/clients/CompanyChangesClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const companyChangesClient = new CompanyChangesClient(HttpClientFactoryInstance.Api)

const useCompanyChanges = (): CompanyChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(companyChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(companyChangesInitialState.isLoading)
    const [changes, setChanges] = useState(companyChangesInitialState.changes)
    const [total, setTotal] = useState(companyChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await companyChangesClient.GetPagedListAsync({ ...request, companyId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await companyChangesClient.GetPagedListAsync({
            ...request,
            companyId: id,
            offset: 0,
            limit: MaxLimit
        })

        if (response.changes) {
            response.changes.forEach(v => {
                delete v.changerUserId
            })
        }

        setIsLoading(false)

        return response
    }, [id, request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, total, changes, getAll }
}

export default useCompanyChanges
