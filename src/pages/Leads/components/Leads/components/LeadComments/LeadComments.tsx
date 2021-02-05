import React, { FC, useContext } from 'react'

import Comments from '../../../../../../components/common/collections/Comments/Comments'
import LeadCommentContext from '../../contexts/LeadCommentContext/LeadCommentContext'
import LeadCommentsContext from '../../contexts/LeadCommentsContext/LeadCommentsContext'
import useLeadComments from './hooks/useLeadComments'

const LeadComments: FC = () => {
    const commentsState = useContext(LeadCommentsContext)
    const commentState = useContext(LeadCommentContext)
    const { onChangeCommentToSend, map, onClickLoadPrevious, onClickSend } = useLeadComments()

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

export default LeadComments
