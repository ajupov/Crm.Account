import LeadCommentsState, { leadCommentsInitialState } from '../../../states/LeadCommentsState'
import {
    getMaxCreateDateTime,
    getMinCreateDateTime,
    mergeAndSort
} from '../../../../../../../helpers/createDateTimeHelper'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadCommentsClient from '../../../../../../../../api/leads/clients/LeadCommentsClient'
import { useParams } from 'react-router'

const leadCommentsClient = new LeadCommentsClient(HttpClientFactoryInstance.Api)

const useLeadComments = (): LeadCommentsState => {
    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(leadCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(leadCommentsInitialState.isLoading)
    const [isNeedLoadingBefore, setIsNeedLoadingBefore] = useState(leadCommentsInitialState.isNeedLoadingBefore)
    const [isNeedLoadingAfter, setIsNeedLoadingAfter] = useState(leadCommentsInitialState.isNeedLoadingAfter)
    const [comments, setComments] = useState(leadCommentsInitialState.comments)
    const [hasCommentsBefore, setHasCommentsBefore] = useState(leadCommentsInitialState.hasCommentsBefore)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await leadCommentsClient.GetPagedListAsync({ ...request, leadId: id })

        if (response?.comments?.length) {
            setComments(mergeAndSort(response?.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [id, request])

    const getNext = useCallback(async () => {
        setIsLoading(true)

        const afterCreateDateTime = getMaxCreateDateTime(comments)

        const response = await leadCommentsClient.GetPagedListAsync({
            ...request,
            leadId: id,
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

        const response = await leadCommentsClient.GetPagedListAsync({
            ...request,
            leadId: id,
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

export default useLeadComments
