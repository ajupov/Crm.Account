import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface IActiveMenuItemProps {
    path: string
    children: string | JSX.Element | (string | JSX.Element)[]
}

export const ActiveMenuItem: FC<IActiveMenuItemProps> = ({ path, children }) => (
    <Menu.Item as={Link} to={path} active={window.location.pathname === path}>
        {children}
    </Menu.Item>
)
