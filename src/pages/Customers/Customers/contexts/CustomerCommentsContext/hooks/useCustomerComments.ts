import CustomerCommentsState, { customerCommentsInitialState } from '../../../states/CustomerCommentsState'
import {
    getMaxCreateDateTime,
    getMinCreateDateTime,
    mergeAndSort
} from '../../../../../../helpers/createDateTimeHelper'
import { useCallback, useEffect, useState } from 'react'

import CustomerCommentsClient from '../../../../../../../api/customers/clients/CustomerCommentsClient'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const customerCommentsClient = new CustomerCommentsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerComments = (): CustomerCommentsState => {
    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(customerCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(customerCommentsInitialState.isLoading)
    const [isNeedLoadingBefore, setIsNeedLoadingBefore] = useState(customerCommentsInitialState.isNeedLoadingBefore)
    const [isNeedLoadingAfter, setIsNeedLoadingAfter] = useState(customerCommentsInitialState.isNeedLoadingAfter)
    const [comments, setComments] = useState(customerCommentsInitialState.comments)
    const [hasCommentsBefore, setHasCommentsBefore] = useState(customerCommentsInitialState.hasCommentsBefore)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await customerCommentsClient.GetPagedListAsync({ ...request, customerId: id })

        if (response?.comments?.length) {
            setComments(mergeAndSort(response?.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [id, request])

    const getNext = useCallback(async () => {
        setIsLoading(true)

        const afterCreateDateTime = getMaxCreateDateTime(comments)

        const response = await customerCommentsClient.GetPagedListAsync({
            ...request,
            customerId: id,
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

        const response = await customerCommentsClient.GetPagedListAsync({
            ...request,
            customerId: id,
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

export default useCustomerComments
