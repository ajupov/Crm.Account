import { Media, MediaContextProvider } from '../../../../../tokens/Tokens'
import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import React, { FC } from 'react'

import DesktopMenu from './DesktopMenu'
import DesktopSidebarMenu from './DesktopSidebarMenu'

const DesktopContainer: FC = ({ children }) => (
    <MediaContextProvider>
        <Media greaterThanOrEqual="tablet">
            <Segment style={{ margin: '-20px' }}>
                <Menu fixed="top" inverted style={{ backgroundColor: '#263238' }} borderless>
                    <DesktopMenu />
                </Menu>
            </Segment>
            <Segment style={{ paddingBottom: 0, paddingTop: '10px' }} vertical>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        style={{ backgroundColor: '#37474F', width: '130px', paddingTop: '54px' }}
                        inverted
                        vertical
                        visible
                        icon="labeled"
                    >
                        <DesktopSidebarMenu />
                    </Sidebar>
                    <Sidebar.Pusher
                        style={{
                            transform: 'translate3d(0,0,0)',
                            paddingLeft: '130px',
                            minHeight: '100vh',
                            paddingTop: '54px'
                        }}
                    >
                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Segment>
        </Media>
    </MediaContextProvider>
)

export default DesktopContainer
