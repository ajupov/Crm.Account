import DealAttributesState, { dealAttributesInitialState } from '../../../states/DealAttributesState'
import { useCallback, useEffect, useState } from 'react'

import DealAttributesClient from '../../../../../../../api/deals/clients/DealAttributesClient'
import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const dealAttributesClient = new DealAttributesClient(HttpClientFactoryInstance.Api)

const useDealAttributes = (): DealAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(dealAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(dealAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(dealAttributesInitialState.attributes)
    const [total, setTotal] = useState(dealAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(dealAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await dealAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await dealAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
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

export default useDealAttributes
