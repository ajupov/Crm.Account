import React from 'react'
import { Container, Button, Icon, Header } from 'semantic-ui-react'

interface IBannerProps {
    isMobile: boolean
}
export const Banner = ({ isMobile }: IBannerProps) => (
    <Container text>
        <Header
            as="h1"
            content="LiteCRM"
            inverted
            style={{
                fontSize: isMobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: isMobile ? '1.5em' : '3em'
            }}
        />
        <Header
            as="h2"
            content="Просто. Легко. Доступно."
            inverted
            style={{
                fontSize: isMobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: isMobile ? '0.5em' : '1.5em'
            }}
        />
        <Button primary size="huge">
            Начать
            <Icon name="arrow right" />
        </Button>
    </Container>
)
