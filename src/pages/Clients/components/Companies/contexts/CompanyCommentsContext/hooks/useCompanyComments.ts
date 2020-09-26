import CompanyCommentsState, { companyCommentsInitialState } from '../../../states/CompanyCommentsState'
import {
    getMaxCreateDateTime,
    getMinCreateDateTime,
    mergeAndSort
} from '../../../../../../../helpers/createDateTimeHelper'
import { useCallback, useEffect, useState } from 'react'

import CompanyCommentsClient from '../../../../../../../../api/companies/clients/CompanyCommentsClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const companyCommentsClient = new CompanyCommentsClient(HttpClientFactoryInstance.Api)

const useCompanyComments = (): CompanyCommentsState => {
    const { id }: { id: string } = useParams()
    const [request, setRequest] = useState(companyCommentsInitialState.request)
    const [isLoading, setIsLoading] = useState(companyCommentsInitialState.isLoading)
    const [isNeedLoadingBefore, setIsNeedLoadingBefore] = useState(companyCommentsInitialState.isNeedLoadingBefore)
    const [isNeedLoadingAfter, setIsNeedLoadingAfter] = useState(companyCommentsInitialState.isNeedLoadingAfter)
    const [comments, setComments] = useState(companyCommentsInitialState.comments)
    const [hasCommentsBefore, setHasCommentsBefore] = useState(companyCommentsInitialState.hasCommentsBefore)

    const getPagedList = useCallback(async () => {
        setIsLoading(true)

        const response = await companyCommentsClient.GetPagedListAsync({ ...request, companyId: id })

        if (response?.comments?.length) {
            setComments(mergeAndSort(response?.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [id, request])

    const getNext = useCallback(async () => {
        setIsLoading(true)

        const afterCreateDateTime = getMaxCreateDateTime(comments)

        const response = await companyCommentsClient.GetPagedListAsync({
            ...request,
            companyId: id,
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

        const response = await companyCommentsClient.GetPagedListAsync({
            ...request,
            companyId: id,
            beforeCreateDateTime
        })

        if (response?.comments?.length) {
            setComments(mergeAndSort(comments, response.comments))
        }

        setHasCommentsBefore(response.hasCommentsBefore)

        setIsLoading(false)
    }, [comments, id, request])

    useEffect(() => {
        getPagedList()
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

export default useCompanyComments
