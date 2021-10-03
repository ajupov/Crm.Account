import { Icon, Menu, SemanticICONS } from 'semantic-ui-react'
import React, { FC, useCallback, useContext, useMemo } from 'react'

import Configuration from '../../../../../configuration/Configuration'
import ContactsRoutes from '../../../../../pages/Clients/components/Contacts/routes/ContactsRoutes'
import { Link } from 'react-router-dom'
import ProductsRoutes from '../../../../../pages/Products/components/Products/routes/ProductsRoutes'
import UserInfoContext from '../../../../system/UserInfo/contexts/UserInfoContext/UserInfoContext'

export interface MobileSidebarMenuProps {
    onClickItem: () => void
}

// TODO: Move to l10n
const MobileSidebarMenu: FC<MobileSidebarMenuProps> = ({ onClickItem }) => {
    const state = useContext(UserInfoContext)
    const configuration = new Configuration()

    const AvatarAndUserElement = useMemo(
        () => (
            <>
                <Icon circular name="user" style={{ marginRight: '1em', float: 'left' }} size="large" />
                {state.name}
            </>
        ),
        [state.name]
    )

    const renderItem = useCallback(
        (title: string, path: string, icon: SemanticICONS) => (
            <Menu.Item as={Link} to={path} onClick={onClickItem}>
                <Icon name={icon} style={{ float: 'left', marginRight: '12px' }} />
                {title}
            </Menu.Item>
        ),
        [onClickItem]
    )

    return (
        <>
            <Menu.Item as={Link} to="settings" onClick={onClickItem} style={{ height: '68px', lineHeight: '48px' }}>
                {AvatarAndUserElement}
            </Menu.Item>
            {renderItem('Инфопанель', '', 'dashboard')}
            {renderItem('Календарь', '/calendar', 'calendar')}
            {renderItem('Задачи', '/tasks', 'tasks')}
            {renderItem('Сделки', '/orders', 'handshake')}
            {renderItem('Лиды', '/customers', 'filter')}
            {renderItem('Клиенты', ContactsRoutes.Index, 'address book')}
            {renderItem('Продукты', ProductsRoutes.Index, 'list ol')}
            {renderItem('Настройки аккаунта', '/settings', 'user circle')}
            <Menu.Item as="a" href={configuration.LogoutUrl}>
                <Icon name="log out" style={{ float: 'left', marginRight: '12px' }} />
                Выйти
            </Menu.Item>
        </>
    )
}

export default MobileSidebarMenu
