import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface IActiveMenuItemProps {
    path: string
    children: JSX.Element | string | (JSX.Element | string)[]
}

export const ActiveMenuItem = ({ path, children }: IActiveMenuItemProps) => (
    <Menu.Item as={Link} to={path} active={window.location.pathname === path}>
        {children}
    </Menu.Item>
)
