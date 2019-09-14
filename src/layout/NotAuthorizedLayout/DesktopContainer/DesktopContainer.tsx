import React, { useState } from 'react'
import { Responsive, Visibility, Segment } from 'semantic-ui-react'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'
import { Banner } from '../Banner/Banner'

interface IDesktopContainerProps {
    children: JSX.Element | JSX.Element[]
}

export const DesktopContainer = ({ children }: IDesktopContainerProps) => {
    const [isMenuVisible, setMenuVisible] = useState(false)

    const showMenu = () => setMenuVisible(true)
    const hideMenu = () => setMenuVisible(false)

    return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={false} onBottomPassed={showMenu} onBottomPassedReverse={hideMenu}>
                <Segment inverted textAlign="center" style={{ minHeight: 700, padding: '1em 0em' }} vertical>
                    <DesktopMenu isVisible={isMenuVisible} />
                    <Banner isMobile={false} />
                </Segment>
            </Visibility>
            {children}
        </Responsive>
    )
}
