import React, { useState } from 'react'
import { Responsive, Sidebar, Segment, Container } from 'semantic-ui-react'
import { MobileMenu, MobileMenuPushed } from './MobileMenu/MobileMenu'
import { Banner } from '../Banner/Banner'

interface IMobileContainerProps {
    children: JSX.Element | JSX.Element[]
}

export const MobileContainer = ({ children }: IMobileContainerProps) => {
    const [isMenuVisible, setMenuVisible] = useState(false)

    const showMenu = () => setMenuVisible(true)
    const hideMenu = () => setMenuVisible(false)

    return (
        <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar animation="push" inverted onHide={hideMenu} vertical visible={isMenuVisible}>
                <MobileMenu />
            </Sidebar>
            <Sidebar.Pusher dimmed={isMenuVisible}>
                <Segment inverted textAlign="center" style={{ minHeight: 350, padding: '1em 0em' }} vertical>
                    <Container>
                        <MobileMenuPushed onClickShowMenu={showMenu} />
                    </Container>
                    <Banner isMobile={true} />
                </Segment>
                {children}
            </Sidebar.Pusher>
        </Responsive>
    )
}
