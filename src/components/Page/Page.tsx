import { Card, Grid, Header, Responsive } from 'semantic-ui-react'
import React, { FC } from 'react'

import BackLink from '../BackLink/BackLink'

interface PageProps {
    title: string
    firstSidebar?: JSX.Element
    secondSidebar?: JSX.Element
    secondSidebarMobile?: JSX.Element
    onClickCancel?: () => void
}

const Page: FC<PageProps> = ({ onClickCancel, title, children, firstSidebar, secondSidebar, secondSidebarMobile }) => (
    <Grid style={{ margin: 0 }} columns="equal" stackable reversed="mobile">
        <Grid.Column>
            <Card fluid>
                <Card.Content>
                    <Grid columns="equal" verticalAlign="middle">
                        <Grid.Column>
                            <Header as="h3" style={{ marginBottom: '10px' }}>
                                {title}
                            </Header>
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
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>{firstSidebar}</Responsive>
            <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                {firstSidebar}
                {secondSidebar && (
                    <Card fluid>
                        <Card.Content>{secondSidebar}</Card.Content>
                    </Card>
                )}
            </Responsive>
        </Grid.Column>
    </Grid>
)

export default Page
