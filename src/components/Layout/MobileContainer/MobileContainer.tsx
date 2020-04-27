import { Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'
import React, { FC, useCallback, useState } from 'react'

import MobileMenu from './MobileMenu'
import MobileSidebarMenu from './MobileSidebarMenu'

const MobileContainer: FC = ({ children }) => {
    const [isSidebarMenuVisible, setSidebarMenuVisible] = useState(false)

    const showMenu = useCallback((): void => setSidebarMenuVisible(true), [])

    const hideMenu = useCallback((): void => setSidebarMenuVisible(false), [])

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
                <MobileSidebarMenu onClickItem={hideMenu} />
            </Sidebar>
            <Sidebar.Pusher
                dimmed={isSidebarMenuVisible}
                style={{ height: '100vh', paddingBottom: 0, overflowY: 'auto' }}
            >
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
