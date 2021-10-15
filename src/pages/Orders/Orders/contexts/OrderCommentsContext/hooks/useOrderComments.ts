import OrderCommentsState, { orderCommentsInitialState } from '../../../states/OrderCommentsState'
import {
    getMaxCreateDateTime,
    getMinCreateDateTime,
    mergeAndSort
} from '../../../../../../helpers/createDateTimeHelper'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderCommentsClient from '../../../../../../../api/orders/clients/OrderCommentsClient'
import { useParams } from 'react-router'

const orderCommentsClient = new OrderCommentsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderComments = (): OrderCommentsState => {
    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(orderCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(orderCommentsInitialState.isLoading)
    const [isNeedLoadingBefore, setIsNeedLoadingBefore] = useState(orderCommentsInitialState.isNeedLoadingBefore)
    const [isNeedLoadingAfter, setIsNeedLoadingAfter] = useState(orderCommentsInitialState.isNeedLoadingAfter)
    const [comments, setComments] = useState(orderCommentsInitialState.comments)
    const [hasCommentsBefore, setHasCommentsBefore] = useState(orderCommentsInitialState.hasCommentsBefore)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await orderCommentsClient.GetPagedListAsync({ ...request, orderId: id })

        if (response?.comments?.length) {
            setComments(mergeAndSort(response?.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [id, request])

    const getNext = useCallback(async () => {
        setIsLoading(true)

        const afterCreateDateTime = getMaxCreateDateTime(comments)

        const response = await orderCommentsClient.GetPagedListAsync({
            ...request,
            orderId: id,
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

        const response = await orderCommentsClient.GetPagedListAsync({
            ...request,
            orderId: id,
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

export default useOrderComments
