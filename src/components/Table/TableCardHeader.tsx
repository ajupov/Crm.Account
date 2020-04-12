import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import React, { FC } from 'react'

import { getLastChangeDateTimeText } from '../../helpers/textHelper'

interface TableCardHeaderProps {
    lastModifyDateTime?: string
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
}

const TableCardHeader: FC<TableCardHeaderProps> = ({ lastModifyDateTime, onClickCreate, onClickDownloadAsCsv }) => (
    <Grid verticalAlign="bottom">
        <Grid.Column width={8}>
            <Card.Meta>{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
        </Grid.Column>
        <Grid.Column width={8}>
            <Button.Group basic size="mini" floated="right">
                <Button icon onClick={onClickCreate}>
                    <Icon name="add" /> Создать
                </Button>
                <Button icon onClick={onClickDownloadAsCsv}>
                    <Icon name="download" /> Выгрузить в CSV
                </Button>
            </Button.Group>
        </Grid.Column>
    </Grid>
)

export default TableCardHeader
