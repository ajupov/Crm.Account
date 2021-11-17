import { useCallback, useContext } from 'react'

import { CommentProps } from '../../../../../../components/common/collections/Comments/Comment'
import SupplierComment from '../../../../../../../api/suppliers/models/SupplierComment'
import SupplierCommentContext from '../../../contexts/SupplierCommentContext/SupplierCommentContext'
import SupplierCommentsContext from '../../../contexts/SupplierCommentsContext/SupplierCommentsContext'
import UserInfoContext from '../../../../../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'
import { addUtcKind } from '../../../../../../utils/dateTime/dateTimeUtils'

interface UseSupplierCommentsTableReturn {
    onChangeCommentToSend: (value: string) => void
    onClickSend: () => void
    map: (comments: SupplierComment[]) => CommentProps[]
    onClickLoadPrevious: () => void
}

const useSupplierComments = (): UseSupplierCommentsTableReturn => {
    const commentsState = useContext(SupplierCommentsContext)
    const commentState = useContext(SupplierCommentContext)
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

export default useSupplierComments
