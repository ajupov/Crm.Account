import React from 'react'
import { Container, Button, Icon, Header, Segment } from 'semantic-ui-react'

export const BannerSegment = () => (
    <Segment inverted style={{ minHeight: 700 }} textAlign="center" vertical>
        <Container text>
            <Header
                as="h1"
                content="LiteCRM"
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em'
                }}
            />
            <Header
                as="h2"
                content="Просто. Легко. Доступно."
                inverted
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em'
                }}
            />
            <Button primary size="huge">
                Начать
                <Icon name="arrow right" />
            </Button>
        </Container>
    </Segment>
)
