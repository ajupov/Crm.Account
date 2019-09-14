import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import { NewsItem } from './NewsItem/NewsItem'

export const NewsSegment = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <NewsItem />
            <NewsItem />
        </Container>
    </Segment>
)
