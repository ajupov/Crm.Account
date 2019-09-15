import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import { JobItem } from './JobItem/JobItem'

export const JobsSegment = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <JobItem />
        </Container>
    </Segment>
)
