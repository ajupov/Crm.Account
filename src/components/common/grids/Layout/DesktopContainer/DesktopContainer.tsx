import { Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'
import React, { FC } from 'react'

import DesktopMenu from './DesktopMenu'
import DesktopSidebarMenu from './DesktopSidebarMenu'

const DesktopContainer: FC = ({ children }) => (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment>
            <Menu fixed="top" inverted style={{ backgroundColor: '#263238' }} borderless>
                <DesktopMenu />
            </Menu>
        </Segment>
        <Segment style={{ paddingBottom: 0, paddingTop: '10px' }} vertical>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    style={{ backgroundColor: '#37474F', width: '130px' }}
                    inverted
                    vertical
                    visible
                    icon="labeled"
                >
                    <DesktopSidebarMenu />
                </Sidebar>
                <Sidebar.Pusher
                    style={{ transform: 'translate3d(0,0,0)', paddingLeft: '130px', minHeight: 'calc(100vh - 54px)' }}
                >
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Segment>
    </Responsive>
)

export default DesktopContainer
