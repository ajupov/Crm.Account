import { Card, Grid, Header, Image, Table } from 'semantic-ui-react'
import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Products: FC = () => {
    useEffect(() => {
        document.title = 'Продукты'
    })

    return (
        <Layout>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>Продукты</Card.Header>
                                <Card.Meta>Последнее изменение 2 часа назад</Card.Meta>
                                <Card.Description>
                                    <Table celled padded selectable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Наименование</Table.HeaderCell>
                                                <Table.HeaderCell>Цена</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <Header as="h4" image>
                                                        <Image
                                                            src="/images/avatar/small/lena.png"
                                                            rounded
                                                            size="mini"
                                                        />
                                                        <Header.Content>
                                                            Lena
                                                            <Header.Subheader>Human Resources</Header.Subheader>
                                                        </Header.Content>
                                                    </Header>
                                                </Table.Cell>
                                                <Table.Cell>22</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <Header as="h4" image>
                                                        <Image
                                                            src="/images/avatar/small/matthew.png"
                                                            rounded
                                                            size="mini"
                                                        />
                                                        <Header.Content>
                                                            Matthew
                                                            <Header.Subheader>Fabric Design</Header.Subheader>
                                                        </Header.Content>
                                                    </Header>
                                                </Table.Cell>
                                                <Table.Cell>15</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <Header as="h4" image>
                                                        <Image
                                                            src="/images/avatar/small/lindsay.png"
                                                            rounded
                                                            size="mini"
                                                        />
                                                        <Header.Content>
                                                            Lindsay
                                                            <Header.Subheader>Entertainment</Header.Subheader>
                                                        </Header.Content>
                                                    </Header>
                                                </Table.Cell>
                                                <Table.Cell>12</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <Header as="h4" image>
                                                        <Image
                                                            src="/images/avatar/small/mark.png"
                                                            rounded
                                                            size="mini"
                                                        />
                                                        <Header.Content>
                                                            Mark
                                                            <Header.Subheader>Executive</Header.Subheader>
                                                        </Header.Content>
                                                    </Header>
                                                </Table.Cell>
                                                <Table.Cell>11</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>

                                        <Table.Footer>
                                            <Table.Row>
                                                <Table.HeaderCell>3 People</Table.HeaderCell>
                                                <Table.HeaderCell>2 Approved</Table.HeaderCell>
                                                <Table.HeaderCell />
                                            </Table.Row>
                                        </Table.Footer>
                                    </Table>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content></Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    )
}
