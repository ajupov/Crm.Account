import React, { FC } from 'react'

import DesktopContainer from './DesktopContainer/DesktopContainer'
import MobileContainer from './MobileContainer/MobileContainer'

const Layout: FC = ({ children }) => (
    <div style={{ backgroundColor: '#f7f7f7' }}>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

export default Layout
