import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import { InfoItem } from './InfoItem/InfoItem'

export const InfosSegment = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <InfoItem />
            <InfoItem />
            <InfoItem />
            <InfoItem />
            <InfoItem />
        </Container>
    </Segment>
)
