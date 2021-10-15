import { useCallback, useContext } from 'react'

import { CommentProps } from '../../../../../../components/common/collections/Comments/Comment'
import OrderComment from '../../../../../../../api/orders/models/OrderComment'
import OrderCommentContext from '../../../contexts/OrderCommentContext/OrderCommentContext'
import OrderCommentsContext from '../../../contexts/OrderCommentsContext/OrderCommentsContext'
import UserInfoContext from '../../../../../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'
import { addUtcKind } from '../../../../../../utils/dateTime/dateTimeUtils'

interface UseOrderCommentsTableReturn {
    onChangeCommentToSend: (value: string) => void
    onClickSend: () => void
    map: (comments: OrderComment[]) => CommentProps[]
    onClickLoadPrevious: () => void
}

const useOrderComments = (): UseOrderCommentsTableReturn => {
    const commentsState = useContext(OrderCommentsContext)
    const commentState = useContext(OrderCommentContext)
    const { name } = useContext(UserInfoContext)

    const map = useCallback(
        () =>
            commentsState.comments.map(
                x =>
                    ({
                        author: name,
                        dateTime: addUtcKind(x.createDateTime),
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

export default useOrderComments
