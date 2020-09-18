import React, { FC, useContext } from 'react'

import Comments from '../../../../../../components/common/collections/Comments/Comments'
import ContactCommentContext from '../../contexts/ContactCommentContext/ContactCommentContext'
import ContactCommentsContext from '../../contexts/ContactCommentsContext/ContactCommentsContext'
import useContactComments from './hooks/useContactComments'

const ContactComments: FC = () => {
    const commentsState = useContext(ContactCommentsContext)
    const commentState = useContext(ContactCommentContext)
    const { onChangeCommentToSend, map, onClickLoadPrevious, onClickSend } = useContactComments()

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

export default ContactComments
