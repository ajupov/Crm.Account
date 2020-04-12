import { Card, Grid, Header } from 'semantic-ui-react'
import React, { FC } from 'react'

interface PageProps {
    title: string
    firstSidebar?: JSX.Element
    secondSidebar?: JSX.Element
}

const Page: FC<PageProps> = ({ title, children, firstSidebar: menu, secondSidebar: secondMenu }) => (
    <Grid>
        <Grid.Column width={11}>
            {children && (
                <Card fluid>
                    <Card.Content>
                        <Header as="h3">{title}</Header>
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
