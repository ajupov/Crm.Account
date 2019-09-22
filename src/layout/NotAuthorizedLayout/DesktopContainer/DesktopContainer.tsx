import React from 'react'
import { Responsive, Segment, Container, Menu } from 'semantic-ui-react'
import { DesktopMenu } from './DesktopMenu'

interface IDesktopContainerProps {
    children: JSX.Element | JSX.Element[]
}

export const DesktopContainer = ({ children }: IDesktopContainerProps) => {
    return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Segment inverted vertical style={{ backgroundColor: '#263238' }}>
                <Container>
                    <Menu inverted pointing secondary>
                        <DesktopMenu />
                    </Menu>
                </Container>
            </Segment>
            {children}
        </Responsive>
    )
}
