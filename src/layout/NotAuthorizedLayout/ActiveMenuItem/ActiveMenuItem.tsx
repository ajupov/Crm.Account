import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface IActiveMenuItemProps {
    path: string
    children: JSX.Element | string
}

export const ActiveMenuItem = ({ path, children }: IActiveMenuItemProps) => (
    <Menu.Item active={window.location.pathname === path}>
        <Link to={path}>{children}</Link>
    </Menu.Item>
)
