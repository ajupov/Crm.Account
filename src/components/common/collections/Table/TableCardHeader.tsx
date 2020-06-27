import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import React, { FC } from 'react'

import { getLastChangeDateTimeText } from '../../../../helpers/entityDateTimeHelper'

export interface TableCardHeaderProps {
    lastModifyDateTime?: string
    onClickCreate?: () => void
    onClickDownloadAsCsv?: () => void
}

// TODO: Move to l10n
const TableCardHeader: FC<TableCardHeaderProps> = ({ lastModifyDateTime, onClickCreate, onClickDownloadAsCsv }) => (
    <Grid verticalAlign="bottom" columns="equal" stackable style={{ paddingBottom: '10px', margin: 0 }}>
        <Grid.Column mobile={16} tablet={16} computer={9} widescreen={13} style={{ padding: 0 }}>
            <Card.Meta>{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={7} widescreen={3} style={{ padding: 0 }}>
            <Button.Group basic widths="2" fluid floated="right" size="mini">
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
