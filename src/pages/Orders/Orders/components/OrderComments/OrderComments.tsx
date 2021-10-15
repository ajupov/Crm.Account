import React, { FC, useContext } from 'react'

import Comments from '../../../../../components/common/collections/Comments/Comments'
import OrderCommentContext from '../../contexts/OrderCommentContext/OrderCommentContext'
import OrderCommentsContext from '../../contexts/OrderCommentsContext/OrderCommentsContext'
import useOrderComments from './hooks/useOrderComments'

const OrderComments: FC = () => {
    const commentsState = useContext(OrderCommentsContext)
    const commentState = useContext(OrderCommentContext)
    const { onChangeCommentToSend, map, onClickLoadPrevious, onClickSend } = useOrderComments()

    return (
        <Comments
            commentToSend={commentState.comment.value}
            onChangeCommentToSend={onChangeCommentToSend}
            comments={map(commentsState.comments)}
            isShowLoadPrevious={commentsState.hasCommentsBefore}
            onClickLoadPrevious={onClickLoadPrevious}
            onClickSendComment={onClickSend}
        />
    )
}

export default OrderComments
