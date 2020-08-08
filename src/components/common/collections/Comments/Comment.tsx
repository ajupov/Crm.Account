import { Icon, Comment as SemanticComment } from 'semantic-ui-react'
import React, { FC } from 'react'

import { getDateTimeAsRecently } from '../../../../utils/dateTime/dateTimeUtils'

export interface CommentProps {
    author: string
    dateTime: Date
    text: string
}

const Comment: FC<CommentProps> = ({ author, dateTime, text }) => (
    <SemanticComment>
        <SemanticComment.Avatar as={Icon} name="user" size="large" />
        <SemanticComment.Content>
            <SemanticComment.Author as="span">{author}</SemanticComment.Author>
            <SemanticComment.Metadata>{getDateTimeAsRecently(dateTime)}</SemanticComment.Metadata>
            <SemanticComment.Text>{text}</SemanticComment.Text>
        </SemanticComment.Content>
    </SemanticComment>
)

export default Comment
