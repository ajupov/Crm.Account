import CompanyCommentState, { companyCommentInitialState } from '../../../states/CompanyCommentState'
import { useCallback, useState } from 'react'

import CompanyCommentsClient from '../../../../../../../../api/companies/clients/CompanyCommentsClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const companyCommentsClient = new CompanyCommentsClient(HttpClientFactoryInstance.Api)

const useCompanyComment = (): CompanyCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(companyCommentInitialState.isLoading)
    const [comment, setComment] = useState(companyCommentInitialState.comment)

    const create = useCallback(async () => {
        if (!comment.value) {
            return
        }

        setIsLoading(true)

        await companyCommentsClient.CreateAsync({ ...comment, companyId: id })

        setComment({ ...comment, value: '' })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useCompanyComment
