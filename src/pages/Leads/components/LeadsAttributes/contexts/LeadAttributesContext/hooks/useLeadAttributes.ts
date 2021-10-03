import LeadAttributesState, { leadAttributesInitialState } from '../../../states/LeadAttributesState'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import LeadAttributesClient from '../../../../../../../../api/customers/clients/LeadAttributesClient'

const leadAttributesClient = new LeadAttributesClient(HttpClientFactory.Api)

const useLeadAttributes = (): LeadAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(leadAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(leadAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(leadAttributesInitialState.attributes)
    const [total, setTotal] = useState(leadAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(leadAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await leadAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await leadAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
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

export default useLeadAttributes
