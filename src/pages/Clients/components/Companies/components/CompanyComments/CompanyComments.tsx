import React, { FC, useContext } from 'react'

import Comments from '../../../../../../components/common/collections/Comments/Comments'
import CompanyCommentContext from '../../contexts/CompanyCommentContext/CompanyCommentContext'
import CompanyCommentsContext from '../../contexts/CompanyCommentsContext/CompanyCommentsContext'
import useCompanyComments from './hooks/useCompanyComments'

const CompanyComments: FC = () => {
    const commentsState = useContext(CompanyCommentsContext)
    const commentState = useContext(CompanyCommentContext)
    const { onChangeCommentToSend, map, onClickLoadPrevious, onClickSend } = useCompanyComments()

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

export default CompanyComments
