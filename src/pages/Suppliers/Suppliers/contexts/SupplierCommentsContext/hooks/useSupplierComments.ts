import SupplierCommentsState, { supplierCommentsInitialState } from '../../../states/SupplierCommentsState'
import {
    getMaxCreateDateTime,
    getMinCreateDateTime,
    mergeAndSort
} from '../../../../../../helpers/createDateTimeHelper'
import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierCommentsClient from '../../../../../../../api/suppliers/clients/SupplierCommentsClient'
import { useParams } from 'react-router'

const supplierCommentsClient = new SupplierCommentsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useSupplierComments = (): SupplierCommentsState => {
    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(supplierCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(supplierCommentsInitialState.isLoading)
    const [isNeedLoadingBefore, setIsNeedLoadingBefore] = useState(supplierCommentsInitialState.isNeedLoadingBefore)
    const [isNeedLoadingAfter, setIsNeedLoadingAfter] = useState(supplierCommentsInitialState.isNeedLoadingAfter)
    const [comments, setComments] = useState(supplierCommentsInitialState.comments)
    const [hasCommentsBefore, setHasCommentsBefore] = useState(supplierCommentsInitialState.hasCommentsBefore)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await supplierCommentsClient.GetPagedListAsync({ ...request, supplierId: id })

        if (response?.comments?.length) {
            setComments(mergeAndSort(response?.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [id, request])

    const getNext = useCallback(async () => {
        setIsLoading(true)

        const afterCreateDateTime = getMaxCreateDateTime(comments)

        const response = await supplierCommentsClient.GetPagedListAsync({
            ...request,
            supplierId: id,
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

        const response = await supplierCommentsClient.GetPagedListAsync({
            ...request,
            supplierId: id,
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

export default useSupplierComments
