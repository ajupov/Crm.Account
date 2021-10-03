import ContactAttributesState, { contactAttributesInitialState } from '../../../states/ContactAttributesState'
import { useCallback, useEffect, useState } from 'react'

import ContactAttributesClient from '../../../../../../../../api/contacts/clients/ContactAttributesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'

const contactAttributesClient = new ContactAttributesClient(HttpClientFactory.Api)

const useContactAttributes = (): ContactAttributesState => {
    const MaxLimit = 1048576

    const [request, setRequest] = useState(contactAttributesInitialState.request)
    const [isLoading, setIsLoading] = useState(contactAttributesInitialState.isLoading)
    const [attributes, setAttributes] = useState(contactAttributesInitialState.attributes)
    const [total, setTotal] = useState(contactAttributesInitialState.total)
    const [lastModifyDateTime, setLastModifyDateTime] = useState(contactAttributesInitialState.lastModifyDateTime)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await contactAttributesClient.GetPagedListAsync(request)

        setAttributes(response.attributes ?? [])
        setTotal(response.totalCount)
        setLastModifyDateTime(response.lastModifyDateTime ?? '')

        setIsLoading(false)
    }, [request, setLastModifyDateTime, setTotal])

    const getAll = useCallback(async () => {
        setIsLoading(true)

        const response = await contactAttributesClient.GetPagedListAsync({ ...request, offset: 0, limit: MaxLimit })
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

export default useContactAttributes
