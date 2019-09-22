import React, { useState } from 'react'
import { Responsive, Sidebar, Segment, Menu } from 'semantic-ui-react'
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
            <Sidebar
                as={Menu}
                inverted
                vertical
                animation="overlay"
                visible={isSidebarMenuVisible}
                onHide={hideMenu}
                style={{ backgroundColor: '#37474F' }}
            >
                <MobileSidebarMenu />
            </Sidebar>
            <Sidebar.Pusher dimmed={isSidebarMenuVisible} style={{ height: '100vh', paddingBottom: 0 }}>
                <Segment inverted vertical style={{ backgroundColor: '#263238' }}>
                    <Menu inverted secondary>
                        <MobileMenu onClickShow={showMenu} />
                    </Menu>
                </Segment>
                {children}
            </Sidebar.Pusher>
        </Responsive>
    )
}
