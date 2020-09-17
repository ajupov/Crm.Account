import { Button, Divider, Form, Header, Icon, Comment as SemanticComment, TextAreaProps } from 'semantic-ui-react'
import Comment, { CommentProps } from './Comment'
import React, { FC, useCallback } from 'react'

import LoadMoreLink from '../../links/LoadMoreLink/LoadMoreLink'

interface CommentsProps {
    comments: CommentProps[]
    commentToSend?: string
    onChangeCommentToSend: (value: string) => void
    onClickSendComment: () => void
    onClickLoadPrevious: () => void
}

// TODO: Move to l10n
const Comments: FC<CommentsProps> = ({
    comments,
    commentToSend,
    onChangeCommentToSend,
    onClickSendComment,
    onClickLoadPrevious
}) => {
    const _onChange = useCallback((_, data: TextAreaProps) => onChangeCommentToSend(data.value?.toString() ?? ''), [
        onChangeCommentToSend
    ])

    return (
        <SemanticComment.Group>
            <Divider />
            <Header as="h3">Комментарии</Header>
            <LoadMoreLink onClick={onClickLoadPrevious} />
            {comments.map((x, i) => (
                <Comment key={i} {...x} />
            ))}
            <Form reply>
                <Form.TextArea value={commentToSend} onChange={_onChange} />
                <Button floated="right" basic onClick={onClickSendComment}>
                    <Icon name="comment" />
                    Комментировать
                </Button>
            </Form>
        </SemanticComment.Group>
    )
}

export default Comments
