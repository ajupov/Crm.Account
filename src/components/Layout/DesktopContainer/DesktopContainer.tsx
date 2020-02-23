import { Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'
import React, { FC } from 'react'

import DesktopMenu from './DesktopMenu'
import DesktopSidebarMenu from './DesktopSidebarMenu'

const DesktopContainer: FC = ({ children }) => (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment>
            <Menu fixed="top" inverted style={{ backgroundColor: '#263238' }} borderless={true}>
                <DesktopMenu />
            </Menu>
        </Segment>
        <Segment style={{ paddingBottom: 0, paddingTop: '10px' }} vertical>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    style={{ backgroundColor: '#37474F', width: '115px' }}
                    inverted
                    vertical
                    visible
                    width="thin"
                    icon="labeled"
                >
                    <DesktopSidebarMenu />
                </Sidebar>
                <Sidebar.Pusher
                    style={{ paddingTop: '10px', transform: 'translate3d(135px,0,0)', minHeight: 'calc(100vh - 54px)' }}
                >
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Segment>
    </Responsive>
)

export default DesktopContainer
