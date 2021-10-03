import ContactCommentState, { contactCommentInitialState } from '../../../states/ContactCommentState'
import { useCallback, useState } from 'react'

import ContactCommentsClient from '../../../../../../../../api/contacts/clients/ContactCommentsClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const contactCommentsClient = new ContactCommentsClient(HttpClientFactory.Api)

const useContactComment = (): ContactCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(contactCommentInitialState.isLoading)
    const [comment, setComment] = useState(contactCommentInitialState.comment)

    const create = useCallback(async () => {
        if (!comment.value) {
            return
        }

        setIsLoading(true)

        await contactCommentsClient.CreateAsync({ ...comment, contactId: id })

        setComment({ ...comment, value: '' })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useContactComment
