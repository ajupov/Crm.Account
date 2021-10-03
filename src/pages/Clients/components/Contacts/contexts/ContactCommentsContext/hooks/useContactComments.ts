import ContactCommentsState, { contactCommentsInitialState } from '../../../states/ContactCommentsState'
import {
    getMaxCreateDateTime,
    getMinCreateDateTime,
    mergeAndSort
} from '../../../../../../../helpers/createDateTimeHelper'
import { useCallback, useEffect, useState } from 'react'

import ContactCommentsClient from '../../../../../../../../api/contacts/clients/ContactCommentsClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const contactCommentsClient = new ContactCommentsClient(HttpClientFactory.Api)

const useContactComments = (): ContactCommentsState => {
    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(contactCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(contactCommentsInitialState.isLoading)
    const [isNeedLoadingBefore, setIsNeedLoadingBefore] = useState(contactCommentsInitialState.isNeedLoadingBefore)
    const [isNeedLoadingAfter, setIsNeedLoadingAfter] = useState(contactCommentsInitialState.isNeedLoadingAfter)
    const [comments, setComments] = useState(contactCommentsInitialState.comments)
    const [hasCommentsBefore, setHasCommentsBefore] = useState(contactCommentsInitialState.hasCommentsBefore)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await contactCommentsClient.GetPagedListAsync({ ...request, contactId: id })

        if (response?.comments?.length) {
            setComments(mergeAndSort(response?.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [id, request])

    const getNext = useCallback(async () => {
        setIsLoading(true)

        const afterCreateDateTime = getMaxCreateDateTime(comments)

        const response = await contactCommentsClient.GetPagedListAsync({
            ...request,
            contactId: id,
            afterCreateDateTime
        })

        if (response?.comments?.length) {
            setComments(mergeAndSort(comments, response.comments))
        }

        setIsLoading(false)
    }, [comments, id, request])

    const getPrevious = useCallback(async () => {
        setIsLoading(true)

        const beforeCreateDateTime = getMinCreateDateTime(comments)

        const response = await contactCommentsClient.GetPagedListAsync({
            ...request,
            contactId: id,
            beforeCreateDateTime
        })

        if (response?.comments?.length) {
            setComments(mergeAndSort(comments, response.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [comments, id, request])

    useEffect(() => {
        void getPagedList()
    }, [getPagedList])

    return {
        request,
        setRequest,
        isNeedLoadingBefore,
        setIsNeedLoadingBefore,
        isNeedLoadingAfter,
        setIsNeedLoadingAfter,
        isLoading,
        comments,
        hasCommentsBefore,
        getPagedList,
        getNext,
        getPrevious
    }
}

export default useContactComments
