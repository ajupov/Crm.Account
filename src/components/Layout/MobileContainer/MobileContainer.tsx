import { Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'
import React, { FC, useState } from 'react'

import MobileMenu from './MobileMenu'
import MobileSidebarMenu from './MobileSidebarMenu'

const MobileContainer: FC = ({ children }) => {
    const [isSidebarMenuVisible, setSidebarMenuVisible] = useState(false)

    const showMenu = (): void => {
        setSidebarMenuVisible(true)
    }

    const hideMenu = (): void => {
        setSidebarMenuVisible(false)
    }

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

export default MobileContainer
