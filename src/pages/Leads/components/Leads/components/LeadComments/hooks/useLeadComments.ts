import { useCallback, useContext } from 'react'

import { CommentProps } from '../../../../../../../components/common/collections/Comments/Comment'
import LeadComment from '../../../../../../../../api/customers/models/LeadComment'
import LeadCommentContext from '../../../contexts/LeadCommentContext/LeadCommentContext'
import LeadCommentsContext from '../../../contexts/LeadCommentsContext/LeadCommentsContext'
import UserInfoContext from '../../../../../../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'

interface UseLeadCommentsTableReturn {
    onChangeCommentToSend: (value: string) => void
    onClickSend: () => void
    map: (comments: LeadComment[]) => CommentProps[]
    onClickLoadPrevious: () => void
}

const useLeadComments = (): UseLeadCommentsTableReturn => {
    const commentsState = useContext(LeadCommentsContext)
    const commentState = useContext(LeadCommentContext)
    const { name } = useContext(UserInfoContext)

    const map = useCallback(
        () =>
            commentsState.comments.map(
                x =>
                    ({
                        author: name,
                        dateTime: new Date(x.createDateTime!),
                        text: x.value
                    } as CommentProps)
            ),
        [name, commentsState.comments]
    )

    const onChangeCommentToSend = useCallback(
        (value: string) => commentState.setComment({ ...commentState.comment, value }),
        [commentState]
    )

    const onClickSend = useCallback(async () => {
        await commentState.create()
        await commentsState.getNext()
    }, [commentState, commentsState])

    const onClickLoadPrevious = useCallback(async () => {
        await commentsState.getPrevious()
    }, [commentsState])

    return { onChangeCommentToSend, map, onClickSend, onClickLoadPrevious }
}

export default useLeadComments
