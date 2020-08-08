import { Button, Divider, Form, Header, Icon, Comment as SemanticComment } from 'semantic-ui-react'
import Comment, { CommentProps } from './Comment'
import React, { FC } from 'react'

interface CommentsProps {
    comments: CommentProps[]
    onClickSendComment?: () => void
}

const Comments: FC<CommentsProps> = ({ comments, onClickSendComment }) => (
    <SemanticComment.Group>
        <Divider />
        <Header as="h3">Комментарии</Header>
        {comments.map((x, i) => (
            <Comment key={i} {...x} />
        ))}
        <Form reply>
            <Form.TextArea />
            <Button floated="right" basic onClick={onClickSendComment}>
                <Icon name="comment" />
                Комментировать
            </Button>
        </Form>
    </SemanticComment.Group>
)

export default Comments
