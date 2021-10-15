import OrderCommentState, { orderCommentInitialState } from '../../../states/OrderCommentState'
import { useCallback, useState } from 'react'

import { Guid } from 'guid-typescript'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import OrderCommentsClient from '../../../../../../../api/orders/clients/OrderCommentsClient'
import { useParams } from 'react-router'

const orderCommentsClient = new OrderCommentsClient(HttpClientFactory.Host, HttpClientFactory.Api)

const useOrderComment = (): OrderCommentState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(orderCommentInitialState.isLoading)
    const [comment, setComment] = useState(orderCommentInitialState.comment)

    const create = useCallback(async () => {
        if (!comment.value) {
            return
        }

        setIsLoading(true)

        await orderCommentsClient.CreateAsync({ ...{ ...comment, id: Guid.create().toString() }, orderId: id })

        setComment({ ...comment, value: '' })

        setIsLoading(false)
    }, [comment, id])

    return { isLoading, comment, setComment, create }
}

export default useOrderComment
