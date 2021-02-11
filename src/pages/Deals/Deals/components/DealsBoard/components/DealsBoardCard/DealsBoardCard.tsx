import React, { FC } from 'react'

import { Card } from 'semantic-ui-react'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'

export type RenderCardContent = {
    id: number
    title: string
    description: string
}

export type RenderCardState = {
    dragging: boolean
    removeCard: () => void
}

interface DealsBoardCardProps {
    content: RenderCardContent
}

const DealsBoardCard: FC<DealsBoardCardProps> = ({ content }) => (
    <Card>
        <Card.Content>
            <Card.Header>{content.title}</Card.Header>
            <Card.Meta>{getDateTimeAsRecently(new Date())}</Card.Meta>
            <Card.Description>{content.description}</Card.Description>
        </Card.Content>
    </Card>
)

export default DealsBoardCard
