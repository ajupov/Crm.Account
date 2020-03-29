import { Card, Grid, Header } from 'semantic-ui-react'
import Menu, { MenuItemProps } from '../menu/Menu'
import React, { FC } from 'react'

interface PageProps {
    title: string
    menu?: MenuItemProps[]
    secondMenu?: JSX.Element
}

const Page: FC<PageProps> = ({ title, children, menu, secondMenu }) => (
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
            {menu && <Menu items={menu} />}

            {secondMenu && (
                <Card fluid>
                    <Card.Content>{secondMenu}</Card.Content>
                </Card>
            )}
        </Grid.Column>
    </Grid>
)

export default Page
