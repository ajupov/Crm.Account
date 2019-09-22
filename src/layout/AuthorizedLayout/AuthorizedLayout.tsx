import React from 'react'
import { DesktopContainer } from './DesktopContainer/DesktopContainer'
import { MobileContainer } from './MobileContainer/MobileContainer'

interface IAuthorizedLayoutProps {
    children: JSX.Element | JSX.Element[]
}

export const AuthorizedLayout = ({ children }: IAuthorizedLayoutProps) => (
    <div style={{ backgroundColor: '#f7f7f7' }}>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)
