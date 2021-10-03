import LeadCommentState, { leadCommentInitialState } from '../../../states/LeadCommentState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import LeadCommentsClient from '../../../../../../../../api/customers/clients/LeadCommentsClient'
import { useParams } from 'react-router'

const leadCommentsClient = new LeadCommentsClient(HttpClientFactory.Api)

const useLeadComment = (): LeadCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(leadCommentInitialState.isLoading)
    const [comment, setComment] = useState(leadCommentInitialState.comment)

    const create = useCallback(async () => {
        if (!comment.value) {
            return
        }

        setIsLoading(true)

        await leadCommentsClient.CreateAsync({ ...comment, leadId: id })

        setComment({ ...comment, value: '' })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useLeadComment
