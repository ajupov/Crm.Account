import ContactCommentState, { contactCommentInitialState } from '../../../states/ContactCommentState'
import { useCallback, useEffect, useState } from 'react'

import ContactCommentsClient from '../../../../../../../../api/contacts/clients/ContactCommentsClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const contactCommentsClient = new ContactCommentsClient(HttpClientFactoryInstance.Api)

const useContactComment = (): ContactCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(contactCommentInitialState.isLoading)
    const [comment, setComment] = useState(contactCommentInitialState.comment)

    const create = useCallback(async () => {
        setIsLoading(true)

        await contactCommentsClient.CreateAsync({ ...comment, contactId: id })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useContactComment
