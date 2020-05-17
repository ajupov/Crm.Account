import React, { FC, useMemo } from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface ActiveMenuItemProps {
    path: string
    onClick?: () => void
}

const ActiveMenuItem: FC<ActiveMenuItemProps> = ({ path, onClick, children }) => {
    const isActive = useMemo(() => {
        if (window.location.pathname === path) {
            return true
        }

        const subPaths = ['/create', '/view', '/edit', '/changes']
        const pathWithoutRoot = window.location.pathname.replace(path, '')
        if (subPaths.some(x => pathWithoutRoot.startsWith(x))) {
            return true
        }

        return false
    }, [path])

    return (
        <Menu.Item as={Link} to={path} active={isActive} onClick={onClick}>
            {children}
        </Menu.Item>
    )
}

export default ActiveMenuItem
