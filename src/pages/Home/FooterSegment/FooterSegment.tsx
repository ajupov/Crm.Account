import React from 'react'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

export const FooterSegment = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as="h4">
                            Дополнительно
                        </Header>
                        <List link inverted>
                            <List.Item as="a">Карта сайта</List.Item>
                            <List.Item as="a">Контакты</List.Item>
                            <List.Item as="a">Наши планы</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as="h4">
                            Сервисы
                        </Header>
                        <List link inverted>
                            <List.Item as="a">API</List.Item>
                            <List.Item as="a">Вопросы</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as="h4" inverted>
                            СМИ
                        </Header>
                        <p>Дополнительная информация о социальных сетях и тд</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
)
