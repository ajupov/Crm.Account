import { Card, Grid, Header, Modal, Responsive } from 'semantic-ui-react'
import React, { FC } from 'react'

import BackLink from '../BackLink/BackLink'

interface PageProps {
    title: string
    firstSidebar?: JSX.Element
    secondSidebar?: JSX.Element
    onClickCancel?: () => void
}

const Page: FC<PageProps> = ({ onClickCancel, title, children, firstSidebar: menu, secondSidebar: secondMenu }) => (
    <Grid style={{ margin: 0 }} columns="equal" stackable reversed="mobile">
        <Grid.Column>
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
        <Grid.Column tablet={5} computer={4} widescreen={2} style={{ paddingLeft: 0 }}>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                {menu}
                {secondMenu && (
                    <Modal>
                        <Card fluid>
                            <Card.Content>{secondMenu}</Card.Content>
                        </Card>
                    </Modal>
                )}
            </Responsive>
            <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                {menu}
                {secondMenu && (
                    <Card fluid>
                        <Card.Content>{secondMenu}</Card.Content>
                    </Card>
                )}
            </Responsive>
        </Grid.Column>
    </Grid>
)

export default Page
