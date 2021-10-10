import { useCallback, useContext } from 'react'

import { CommentProps } from '../../../../../../components/common/collections/Comments/Comment'
import CustomerComment from '../../../../../../../api/customers/models/CustomerComment'
import CustomerCommentContext from '../../../contexts/CustomerCommentContext/CustomerCommentContext'
import CustomerCommentsContext from '../../../contexts/CustomerCommentsContext/CustomerCommentsContext'
import UserInfoContext from '../../../../../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'
import { addUtcKind } from '../../../../../../utils/dateTime/dateTimeUtils'

interface UseCustomerCommentsTableReturn {
    onChangeCommentToSend: (value: string) => void
    onClickSend: () => void
    map: (comments: CustomerComment[]) => CommentProps[]
    onClickLoadPrevious: () => void
}

const useCustomerComments = (): UseCustomerCommentsTableReturn => {
    const commentsState = useContext(CustomerCommentsContext)
    const commentState = useContext(CustomerCommentContext)
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

export default useCustomerComments
