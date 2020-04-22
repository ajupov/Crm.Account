import { Card, Grid, Header } from 'semantic-ui-react'
import React, { FC } from 'react'

import BackLink from '../BackLink/BackLink'

interface PageProps {
    title: string
    firstSidebar?: JSX.Element
    secondSidebar?: JSX.Element
    onClickCancel?: () => void
}

const Page: FC<PageProps> = ({ onClickCancel, title, children, firstSidebar: menu, secondSidebar: secondMenu }) => (
    <Grid style={{ margin: 0 }}>
        <Grid.Column width={11}>
            {children && (
                <Card fluid>
                    <Card.Content>
                        <Header as="h3">{title}</Header>
                        {onClickCancel && <BackLink onClick={onClickCancel} />}
                        {children}
                    </Card.Content>
                </Card>
            )}
        </Grid.Column>
        <Grid.Column width={3}>
            {menu}
            {secondMenu && (
                <Card fluid>
                    <Card.Content>{secondMenu}</Card.Content>
                </Card>
            )}
        </Grid.Column>
    </Grid>
)

export default Page
