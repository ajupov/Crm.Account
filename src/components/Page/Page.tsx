import { Button, Card, Grid, Header, Icon, Modal, Responsive } from 'semantic-ui-react'
import React, { FC, useCallback, useState } from 'react'

import BackLink from '../BackLink/BackLink'

interface PageProps {
    title: string
    firstSidebar?: JSX.Element
    secondSidebar?: JSX.Element
    onClickCancel?: () => void
}

const Page: FC<PageProps> = ({ onClickCancel, title, children, firstSidebar, secondSidebar }) => {
    const [isShowMobileSecondSidebar, setIsShowMobileSecondSidebar] = useState(false)

    const onClickShowMobileSecondSidebar = useCallback(() => setIsShowMobileSecondSidebar(true), [])

    const onClickHideMobileSecondSidebar = useCallback(() => setIsShowMobileSecondSidebar(false), [])

    return (
        <Grid style={{ margin: 0 }} columns="equal" stackable reversed="mobile">
            <Grid.Column>
                {children && (
                    <Card fluid>
                        <Card.Content>
                            <Grid columns="equal" verticalAlign="middle">
                                <Grid.Column>
                                    <Header as="h3">{title}</Header>
                                </Grid.Column>
                                <Grid.Column only="mobile">
                                    {secondSidebar && (
                                        <>
                                            <Button
                                                basic
                                                icon
                                                size="mini"
                                                floated="right"
                                                onClick={onClickShowMobileSecondSidebar}
                                            >
                                                <Icon name="filter" />
                                                Фильтры
                                            </Button>

                                            <Modal
                                                size="mini"
                                                open={isShowMobileSecondSidebar}
                                                onClose={onClickHideMobileSecondSidebar}
                                            >
                                                <Card fluid>
                                                    <Card.Content>{secondSidebar}</Card.Content>
                                                </Card>
                                            </Modal>
                                        </>
                                    )}
                                </Grid.Column>
                            </Grid>
                            {onClickCancel && <BackLink onClick={onClickCancel} />}
                            {children}
                        </Card.Content>
                    </Card>
                )}
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
}

export default Page
