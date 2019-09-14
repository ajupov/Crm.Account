import React from 'react'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'

export const AboutSegment = () => (
    <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                        О компании
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>Вот что говорят о нас</p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                        "Отличная компания"
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        <Image avatar src="./content/client-avatar-micro.jpg" />
                        Усман Аюпов
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)
