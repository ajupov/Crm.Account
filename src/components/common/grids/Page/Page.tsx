import { Card, Grid, Header } from 'semantic-ui-react'
import { Media, MediaContextProvider } from '../../../../tokens/Tokens'
import React, { FC } from 'react'

import BackLink from '../../links/BackLink/BackLink'

export interface PageProps {
    title: string
    firstSidebar?: JSX.Element
    secondSidebar?: JSX.Element
    secondSidebarMobile?: JSX.Element
    onClickCancel?: () => void
}

const Page: FC<PageProps> = ({ onClickCancel, title, children, firstSidebar, secondSidebar, secondSidebarMobile }) => (
    <Grid columns="equal" stackable reversed="mobile" style={{ margin: 0 }}>
        <Grid.Column>
            <Card fluid>
                <Card.Content>
                    <Grid columns="equal" verticalAlign="middle" style={{ margin: 0 }}>
                        <Grid.Column style={{ padding: '0', paddingBottom: '10px' }}>
                            <Header as="h3">{title}</Header>
                        </Grid.Column>
                        <Grid.Column only="mobile" width={6}>
                            {secondSidebarMobile}
                        </Grid.Column>
                    </Grid>
                    {onClickCancel && <BackLink onClick={onClickCancel} />}
                    {children}
                </Card.Content>
            </Card>
        </Grid.Column>
        <Grid.Column tablet={5} computer={4} widescreen={2} style={{ paddingLeft: 0 }}>
            <MediaContextProvider>
                <Media lessThan="tablet">{firstSidebar}</Media>
                <Media greaterThanOrEqual="tablet">
                    {firstSidebar}
                    {secondSidebar && (
                        <Card fluid>
                            <Card.Content>{secondSidebar}</Card.Content>
                        </Card>
                    )}
                </Media>
            </MediaContextProvider>
        </Grid.Column>
    </Grid>
)

export default Page
