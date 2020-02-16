import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface ActiveMenuItemProps {
    path: string
}

const ActiveMenuItem: FC<ActiveMenuItemProps> = ({ path, children }) => (
    <Menu.Item as={Link} to={path} active={window.location.pathname === path}>
        {children}
    </Menu.Item>
)

export default ActiveMenuItem
