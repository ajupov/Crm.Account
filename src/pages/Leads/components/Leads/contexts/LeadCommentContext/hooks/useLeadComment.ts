import LeadCommentState, { leadCommentInitialState } from '../../../states/LeadCommentState'
import { useCallback, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import LeadCommentsClient from '../../../../../../../../api/leads/clients/LeadCommentsClient'
import { useParams } from 'react-router'

const leadCommentsClient = new LeadCommentsClient(HttpClientFactoryInstance.Api)

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
