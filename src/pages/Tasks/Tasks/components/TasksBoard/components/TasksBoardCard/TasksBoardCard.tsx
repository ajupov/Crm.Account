import React, { FC } from 'react'

import { Card } from 'semantic-ui-react'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'

export type RenderCardContent = {
    id: number
    title: string
    date?: Date
    progress?: number
}

export type RenderCardState = {
    dragging: boolean
    removeCard: () => void
}

interface TasksBoardCardProps {
    content: RenderCardContent
}

const TasksBoardCard: FC<TasksBoardCardProps> = ({ content }) => {
    const _100Percent = 100

    const getProgres = (value?: number): string => (value ? `${Math.round(value / _100Percent)}%` : '')

    return (
        <Card raised style={{ width: '100%', marginBottom: '8px' }}>
            <Card.Content>
                <Card.Header>
                    <h5>{content.title}</h5>
                </Card.Header>
                <Card.Meta>{getDateTimeAsRecently(content.date)}</Card.Meta>
                <Card.Description>{getProgres(content.progress)}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default TasksBoardCard
