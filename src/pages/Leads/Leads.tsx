import { Button, Comment, Form, Header, Icon } from 'semantic-ui-react'
import React, { FC, useContext, useEffect } from 'react'

import UserInfoContext from '../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'

const Leads: FC = () => {
    const { name } = useContext(UserInfoContext)

    useEffect(() => {
        document.title = 'Лиды'
    })

    const CommentExampleComment = (): JSX.Element => (
        <Comment.Group>
            <Header as="h3" dividing>
                Комментарии
            </Header>

            <Comment>
                <Comment.Avatar as={Icon} name="user" size="large" />

                <Comment.Content>
                    <Comment.Author as="span">{name}</Comment.Author>
                    <Comment.Metadata>сегодня в 13:42</Comment.Metadata>
                    <Comment.Text>Это восхитительно!</Comment.Text>
                </Comment.Content>
            </Comment>

            <Form reply>
                <Form.TextArea />
                <Button content="Add Reply" labelPosition="left" icon="edit" primary />
            </Form>
        </Comment.Group>
    )

    return (
        <>
            <h1>Лиды</h1>
            {CommentExampleComment()}
        </>
    )
}

export default Leads
