import ContactCommentsState, { conactCommentsInitialState } from '../../../states/ContactCommentsState'
import { useCallback, useEffect, useState } from 'react'

import ContactCommentsClient from '../../../../../../../../api/contacts/clients/ContactCommentsClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'

const contactCommentsClient = new ContactCommentsClient(HttpClientFactoryInstance.Api)

const useContactComments = (): ContactCommentsState => {
    const [request, setRequest] = useState(conactCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(conactCommentsInitialState.isLoading)
    const [comments, setComments] = useState(conactCommentsInitialState.comments)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await contactCommentsClient.GetPagedListAsync(request)

        setComments(response.comments ?? [])

        setIsLoading(false)
    }, [request])

    useEffect(() => {
        getPagedList()
    }, [getPagedList])

    return { request, setRequest, isLoading, comments, getPagedList }
}

export default useContactComments
