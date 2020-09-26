import { useCallback, useContext } from 'react'

import { CommentProps } from '../../../../../../../components/common/collections/Comments/Comment'
import CompanyComment from '../../../../../../../../api/companies/models/CompanyComment'
import CompanyCommentContext from '../../../contexts/CompanyCommentContext/CompanyCommentContext'
import CompanyCommentsContext from '../../../contexts/CompanyCommentsContext/CompanyCommentsContext'
import UserInfoContext from '../../../../../../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'

interface UseCompanyCommentsTableReturn {
    onChangeCommentToSend: (value: string) => void
    onClickSend: () => void
    map: (comments: CompanyComment[]) => CommentProps[]
    onClickLoadPrevious: () => void
}

const useCompanyComments = (): UseCompanyCommentsTableReturn => {
    const commentsState = useContext(CompanyCommentsContext)
    const commentState = useContext(CompanyCommentContext)
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

export default useCompanyComments
