import React from 'react'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'

export const MissionSegment = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                        Мы помогаем компаниям
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Мы упрощаем им жизнь, предоставля возможность автоматизровать деятельность
                    </p>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                        Мы помогаем частным лицам
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Мы упрощаем им жизнь, предоставля возможность автоматизровать деятельность
                    </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                    <Image bordered rounded size="large" src="./content/mission.png" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)
