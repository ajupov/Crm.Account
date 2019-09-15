import React, { useState } from 'react'
import { Responsive, Sidebar, Segment, Menu, Container } from 'semantic-ui-react'
import { MobileSidebarMenu, MobileMenu } from './MobileMenu'

interface IMobileContainerProps {
    children: JSX.Element | JSX.Element[]
}

export const MobileContainer = ({ children }: IMobileContainerProps) => {
    const [isSidebarMenuVisible, setSidebarMenuVisible] = useState(false)

    const showMenu = () => setSidebarMenuVisible(true)
    const hideMenu = () => setSidebarMenuVisible(false)

    return (
        <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar as={Menu} inverted vertical animation="push" visible={isSidebarMenuVisible} onHide={hideMenu}>
                <MobileSidebarMenu />
            </Sidebar>
            <Sidebar.Pusher dimmed={isSidebarMenuVisible}>
                <Segment inverted vertical>
                    <Menu inverted pointing secondary>
                        <MobileMenu onClickShow={showMenu} />
                    </Menu>
                </Segment>
                {children}
            </Sidebar.Pusher>
        </Responsive>
    )
}
