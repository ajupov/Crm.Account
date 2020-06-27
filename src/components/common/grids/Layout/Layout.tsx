import React, { FC } from 'react'

import DesktopContainer from './DesktopContainer/DesktopContainer'
import MobileContainer from './MobileContainer/MobileContainer'
import OfflineStatus from '../../other/OfflineStatus/OfflineStatus'

const Layout: FC = ({ children }) => (
    <div style={{ backgroundColor: '#f7f7f7' }}>
        <OfflineStatus />
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

export default Layout
