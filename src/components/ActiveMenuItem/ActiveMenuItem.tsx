import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface ActiveMenuItemProps {
    path: string
    onClick?: () => void
}

const ActiveMenuItem: FC<ActiveMenuItemProps> = ({ path, onClick, children }) => (
    <Menu.Item as={Link} to={path} active={window.location.pathname === path} onClick={onClick}>
        {children}
    </Menu.Item>
)

export default ActiveMenuItem
