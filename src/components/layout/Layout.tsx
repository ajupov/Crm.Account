import React, { FC } from 'react'

import DesktopContainer from './desktopContainer/DesktopContainer'
import MobileContainer from './mobileContainer/MobileContainer'

const Layout: FC = ({ children }) => (
    <div style={{ backgroundColor: '#f7f7f7' }}>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

export default Layout
