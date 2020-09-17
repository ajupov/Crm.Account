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

function getMaxCreateDateTime(comments: ContactComment[]): string | undefined {
    return comments.reduce((x, y) =>
        new Date(x.createDateTime!).getTime() > new Date(y.createDateTime!).getTime() ? x : y
    ).createDateTime
}

function getMinCreateDateTime(comments: ContactComment[]): string | undefined {
    return comments.reduce((x, y) =>
        new Date(x.createDateTime!).getTime() < new Date(y.createDateTime!).getTime() ? x : y
    ).createDateTime
}

// TODO: Move to l10n
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
        if (!commentState.comment.value) {
            return
        }

        await commentState.create()

        commentState.setComment({ ...commentState, value: void 0 })

        const afterCreateDateTime = getMaxCreateDateTime(commentsState.comments)

        commentsState.setRequest({
            ...commentsState.request,
            afterCreateDateTime
        })

        commentsState.setIsNeedLoadingAfter(true)
    }, [commentState, commentsState])

    const onClickLoadPrevious = useCallback(() => {
        const beforeCreateDateTime = getMinCreateDateTime(commentsState.comments)

        commentsState.setRequest({
            ...commentsState.request,
            beforeCreateDateTime
        })
    }, [commentsState])

    return { onChangeCommentToSend, map, onClickSend, onClickLoadPrevious }
}

export default useContactComments
