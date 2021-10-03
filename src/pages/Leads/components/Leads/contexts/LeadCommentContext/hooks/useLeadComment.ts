import CustomerCommentState, { customerCommentInitialState } from '../../../states/CustomerCommentState'
import { useCallback, useState } from 'react'

import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import CustomerCommentsClient from '../../../../../../../../api/customers/clients/CustomerCommentsClient'
import { useParams } from 'react-router'

const customerCommentsClient = new CustomerCommentsClient(HttpClientFactory.Api)

const useCustomerComment = (): CustomerCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(customerCommentInitialState.isLoading)
    const [comment, setComment] = useState(customerCommentInitialState.comment)

    const create = useCallback(async () => {
        if (!comment.value) {
            return
        }

        setIsLoading(true)

        await customerCommentsClient.CreateAsync({ ...comment, customerId: id })

        setComment({ ...comment, value: '' })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useCustomerComment
