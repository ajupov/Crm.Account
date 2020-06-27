import { Icon, Menu, SemanticICONS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import { Link } from 'react-router-dom'

// TODO: Move to l10n
const DesktopSidebarMenu: FC = () => {
    const renderItem = useCallback(
        (title: string, path: string, icon: SemanticICONS) => (
            <Menu.Item as={Link} to={path}>
                <Icon name={icon} />
                {title}
            </Menu.Item>
        ),
        []
    )

    return (
        <>
            {renderItem('Инфопанель', '/', 'dashboard')}
            {renderItem('Календарь', '/calendar', 'calendar')}
            {renderItem('Задачи', '/activities', 'tasks')}
            {renderItem('Сделки', '/deals', 'handshake')}
            {renderItem('Клиенты', '/cients', 'address book')}
            {renderItem('Продукты', '/products', 'list ol')}
        </>
    )
}

export default DesktopSidebarMenu
