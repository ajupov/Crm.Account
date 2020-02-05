import { Container, Header, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export const NotFoundSegment: FC = () => (
    <Segment style={{ padding: '18em 0em' }} vertical textAlign="center">
        <Container>
            <Header as="h3" style={{ fontSize: '2em' }}>
                Упс
            </Header>
            <p style={{ fontSize: '1.33em' }}>Такой страницы нет</p>
        </Container>
    </Segment>
)
