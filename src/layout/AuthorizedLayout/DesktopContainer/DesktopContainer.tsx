import React from 'react'
import { Responsive, Segment, Menu, Sidebar } from 'semantic-ui-react'
import { DesktopMenu, DesktopSidebarMenu } from './DesktopMenu'

interface IDesktopContainerProps {
    children: JSX.Element | JSX.Element[]
}

export const DesktopContainer = ({ children }: IDesktopContainerProps) => {
    return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Segment>
                <Menu fixed="top" inverted style={{ backgroundColor: '#263238' }} borderless={true}>
                    <DesktopMenu />
                </Menu>
            </Segment>
            <Segment style={{ height: 'calc(100vh - 44px)', paddingBottom: 0, paddingTop: '10px' }} vertical>
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
                    <Sidebar.Pusher style={{paddingTop: '10px'}}>{children}</Sidebar.Pusher>
                </Sidebar.Pushable>
            </Segment>
        </Responsive>
    )
}
