import { useCallback, useContext } from 'react'

import { CommentProps } from '../../../../../../../components/common/collections/Comments/Comment'
import ContactComment from '../../../../../../../../api/contacts/models/ContactComment'
import ContactCommentContext from '../../../contexts/ContactCommentContext/ContactCommentContext'
import ContactCommentsContext from '../../../contexts/ContactCommentsContext/ContactCommentsContext'
import UserInfoContext from '../../../../../../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'

interface UseContactCommentsTableReturn {
    onChangeCommentToSend: (value: string) => void
    onClickSend: () => void
    map: (comments: ContactComment[]) => CommentProps[]
    onClickLoadPrevious: () => void
}

const useContactComments = (): UseContactCommentsTableReturn => {
    const commentsState = useContext(ContactCommentsContext)
    const commentState = useContext(ContactCommentContext)
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

    const onChangeCommentToSend = useCallback(value => commentState.setComment({ ...commentState.comment, value }), [
        commentState
    ])

    const onClickSend = useCallback(async () => {
        await commentState.create()
        await commentsState.getNext()
    }, [commentState, commentsState])

    const onClickLoadPrevious = useCallback(async () => {
        await commentsState.getPrevious()
    }, [commentsState])

    return { onChangeCommentToSend, map, onClickSend, onClickLoadPrevious }
}

export default useContactComments
