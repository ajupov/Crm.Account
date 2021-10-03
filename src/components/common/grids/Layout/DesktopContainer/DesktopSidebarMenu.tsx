import { Icon, Menu, SemanticICONS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import ContactsRoutes from '../../../../../pages/Clients/components/Contacts/routes/ContactsRoutes'
import { Link } from 'react-router-dom'
import ProductsRoutes from '../../../../../pages/Products/components/Products/routes/ProductsRoutes'

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
            {renderItem('Лиды', '/customers', 'filter')}
            {renderItem('Клиенты', ContactsRoutes.Index, 'address book')}
            {renderItem('Продукты', ProductsRoutes.Index, 'list ol')}
        </>
    )
}

export default DesktopSidebarMenu
