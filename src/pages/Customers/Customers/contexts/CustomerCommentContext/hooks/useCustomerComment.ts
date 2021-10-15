import CustomerCommentState, { customerCommentInitialState } from '../../../states/CustomerCommentState'
import { useCallback, useState } from 'react'

import CustomerCommentsClient from '../../../../../../../api/customers/clients/CustomerCommentsClient'
import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import { useParams } from 'react-router'

const customerCommentsClient = new CustomerCommentsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useCustomerComment = (): CustomerCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(customerCommentInitialState.isLoading)
    const [comment, setComment] = useState(customerCommentInitialState.comment)

    const create = useCallback(async () => {
        if (!comment.value) {
            return
        }

        setIsLoading(true)

        await customerCommentsClient.CreateAsync({ ...{ ...comment, id: Guid.create().toString() }, customerId: id })

        setComment({ ...comment, value: '' })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useCustomerComment
