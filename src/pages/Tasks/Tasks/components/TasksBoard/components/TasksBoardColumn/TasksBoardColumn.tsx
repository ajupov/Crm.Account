import { Button, Grid, Icon } from 'semantic-ui-react'
import React, { FC } from 'react'

export type RenderColumnTitle = {
    title: string
}

interface TasksBoardColumnProps {
    title: string
    onClickAddCard?: () => void
}

const TasksBoardColumn: FC<TasksBoardColumnProps> = ({ title, onClickAddCard }) => (
    <Grid>
        <Grid.Row column="2">
            <Grid.Column width="12">
                <h5 style={{ whiteSpace: 'break-spaces' }}>{title}</h5>
            </Grid.Column>
            <Grid.Column width="4">
                <Button basic size="mini" onClick={onClickAddCard}>
                    <Icon fitted name="add" />
                </Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default TasksBoardColumn
