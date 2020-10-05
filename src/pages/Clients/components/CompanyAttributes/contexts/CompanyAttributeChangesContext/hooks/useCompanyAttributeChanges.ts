import CompanyAttributeChangesState, {
    companyAttributeChangesInitialState
} from '../../../states/CompanyAttributeChangesState'
import { useCallback, useEffect, useState } from 'react'

import CompanyAttributeChangesClient from '../../../../../../../../api/companies/clients/CompanyAttributeChangesClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const companyAttributeChangesClient = new CompanyAttributeChangesClient(HttpClientFactoryInstance.Api)

const useCompanyAttributeChanges = (): CompanyAttributeChangesState => {
    const MaxLimit = 1048576

    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(companyAttributeChangesInitialState.request)
    const [isLoading, setIsLoading] = useState(companyAttributeChangesInitialState.isLoading)
    const [changes, setChanges] = useState(companyAttributeChangesInitialState.changes)
    const [total, setTotal] = useState(companyAttributeChangesInitialState.total)

    const getPagedList = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await companyAttributeChangesClient.GetPagedListAsync({ ...request, attributeId: id })

        setChanges(response.changes ?? [])
        setTotal(response.totalCount)

        setIsLoading(false)
    }, [id, request])

    const getAll = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await companyAttributeChangesClient.GetPagedListAsync({
            ...request,
            attributeId: id,
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

export default useCompanyAttributeChanges
