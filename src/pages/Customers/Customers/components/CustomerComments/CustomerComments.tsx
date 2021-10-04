import React, { FC, useContext } from 'react'

import Comments from '../../../../../components/common/collections/Comments/Comments'
import CustomerCommentContext from '../../contexts/CustomerCommentContext/CustomerCommentContext'
import CustomerCommentsContext from '../../contexts/CustomerCommentsContext/CustomerCommentsContext'
import useCustomerComments from './hooks/useCustomerComments'

const CustomerComments: FC = () => {
    const commentsState = useContext(CustomerCommentsContext)
    const commentState = useContext(CustomerCommentContext)
    const { onChangeCommentToSend, map, onClickLoadPrevious, onClickSend } = useCustomerComments()

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

export default CustomerComments
