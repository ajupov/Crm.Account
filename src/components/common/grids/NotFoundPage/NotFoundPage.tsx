import { Container, Header, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface NotFoundPageProps {
    text: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ text }) => (
    <Segment style={{ padding: '18em 0em' }} vertical textAlign="center">
        <Container>
            <Header as="h3" style={{ fontSize: '2em' }}>
                Упс
            </Header>
            <p style={{ fontSize: '1.33em' }}>{text}</p>
        </Container>
    </Segment>
)

export default NotFoundPage
