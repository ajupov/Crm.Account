import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import React, { FC } from 'react'

import { getLastChangeDateTimeText } from '../../helpers/textHelper'

interface TableCardHeaderProps {
    lastModifyDateTime?: string
    onClickCreate?: () => void
    onClickDownloadAsCsv: () => void
}

const TableCardHeader: FC<TableCardHeaderProps> = ({ lastModifyDateTime, onClickCreate, onClickDownloadAsCsv }) => (
    <Grid verticalAlign="bottom" columns="equal" stackable style={{ paddingBottom: '10px' }}>
        <Grid.Column mobile={16} tablet={16} computer={10} widescreen={13}>
            <Card.Meta>{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={6} widescreen={3}>
            <Button.Group basic fluid floated="right" size="mini">
                {onClickCreate && (
                    <Button icon onClick={onClickCreate}>
                        <Icon name="add" /> Создать
                    </Button>
                )}
                <Button icon onClick={onClickDownloadAsCsv}>
                    <Icon name="download" /> Выгрузить в CSV
                </Button>
            </Button.Group>
        </Grid.Column>
    </Grid>
)

export default TableCardHeader
