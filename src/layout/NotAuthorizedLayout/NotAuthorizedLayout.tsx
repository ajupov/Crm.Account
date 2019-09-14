import React from 'react'
import { DesktopContainer } from './DesktopContainer/DesktopContainer'
import { MobileContainer } from './MobileContainer/MobileContainer'

interface INotAuthorizedLayoutProps {
    children: JSX.Element | JSX.Element[]
}

export const NotAuthorizedLayout = ({ children }: INotAuthorizedLayoutProps) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
)
