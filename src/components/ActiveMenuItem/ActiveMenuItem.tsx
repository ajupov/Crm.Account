import React, { FC, useMemo } from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface ActiveMenuItemProps {
    path: string
    onClick?: () => void
}

const ActiveMenuItem: FC<ActiveMenuItemProps> = ({ path, onClick, children }) => {
    const isActive = useMemo(() => {
        const urlMinPartCount = 2

        return (
            window.location.pathname === path ||
            (path.split('/').length > urlMinPartCount && window.location.pathname.includes(path))
        )
    }, [path])

    return (
        <Menu.Item as={Link} to={path} active={isActive} onClick={onClick}>
            {children}
        </Menu.Item>
    )
}

export default ActiveMenuItem
