import { Button, Divider, Form, Header, Icon, Comment as SemanticComment, TextAreaProps } from 'semantic-ui-react'
import Comment, { CommentProps } from './Comment'
import React, { FC, useCallback } from 'react'

import LoadMoreLink from '../../links/LoadMoreLink/LoadMoreLink'

interface CommentsProps {
    comments: CommentProps[]
    commentToSend?: string
    onChangeCommentToSend: (value: string) => void
    onClickSendComment: () => void
    isShowLoadPrevious: boolean
    onClickLoadPrevious: () => void
}

// TODO: Move to l10n
const Comments: FC<CommentsProps> = ({
    comments,
    commentToSend,
    onChangeCommentToSend,
    onClickSendComment,
    isShowLoadPrevious,
    onClickLoadPrevious
}) => {
    const _onChange = useCallback((_, data: TextAreaProps) => onChangeCommentToSend(data.value?.toString() ?? ''), [
        onChangeCommentToSend
    ])

    const _onInput = useCallback(
        (e: KeyboardEvent) => {
            const enterKeyCode = 13

            if (e.keyCode === enterKeyCode && e.ctrlKey) {
                onClickSendComment()
            }
        },
        [onClickSendComment]
    )

    return (
        <SemanticComment.Group style={{ maxWidth: '100%' }}>
            <Divider />
            <Header as="h3">Комментарии</Header>
            {isShowLoadPrevious && <LoadMoreLink onClick={onClickLoadPrevious} />}
            {comments && comments.length ? (
                comments.map((x, i) => <Comment key={i} {...x} />)
            ) : (
                <Header style={{ color: 'grey', textAlign: 'center' }} as="h5">
                    Пока нет ни одного комментария
                </Header>
            )}
            <Form reply>
                <Form.TextArea value={commentToSend} onChange={_onChange} onKeyDown={_onInput} />
                <Button floated="right" basic onClick={onClickSendComment}>
                    <Icon name="comment" />
                    Комментировать
                </Button>
                <Header as="h6" style={{ margin: 0 }}>
                    Ctrl + Enter - отправить сообщение
                </Header>
            </Form>
        </SemanticComment.Group>
    )
}

export default Comments
