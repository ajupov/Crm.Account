import React, { FC, useContext } from 'react'

import Comments from '../../../../../components/common/collections/Comments/Comments'
import SupplierCommentContext from '../../contexts/SupplierCommentContext/SupplierCommentContext'
import SupplierCommentsContext from '../../contexts/SupplierCommentsContext/SupplierCommentsContext'
import useSupplierComments from './hooks/useSupplierComments'

const SupplierComments: FC = () => {
    const commentsState = useContext(SupplierCommentsContext)
    const commentState = useContext(SupplierCommentContext)
    const { onChangeCommentToSend, map, onClickLoadPrevious, onClickSend } = useSupplierComments()

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

export default SupplierComments
