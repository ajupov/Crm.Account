import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'

export const NotFoundSegment = () => (
    <Segment style={{ padding: '18em 0em' }} vertical textAlign="center">
        <Container>
            <Header as="h3" style={{ fontSize: '2em' }}>
                Упс
            </Header>
            <p style={{ fontSize: '1.33em' }}>Такой страницы нет</p>
        </Container>
    </Segment>
)
