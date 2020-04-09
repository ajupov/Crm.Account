import { Icon, Image, Menu } from 'semantic-ui-react'
import React, { FC, useContext } from 'react'

import ActiveMenuItem from '../../ActiveMenuItem/ActiveMenuItem'
import Configuration from '../../../configuration/Configuration'
import { Link } from 'react-router-dom'
import UserInfoContext from '../../UserInfo/contexts/UserInfoContext'

const MobileSidebarMenu: FC = () => {
    const configuration = new Configuration()
    const { name } = useContext(UserInfoContext)

    const AvatarAndUserElement = (
        <>
            <Image avatar src="/content/client-avatar-micro.jpg" style={{ marginRight: '1.4em' }} />
            {name}
        </>
    )

    return (
        <>
            <Menu.Item as={Link} to="settings" style={{ height: '68px', lineHeight: '48px' }}>
                {AvatarAndUserElement}
            </Menu.Item>
            <ActiveMenuItem path="">
                <Icon name="dashboard" style={{ float: 'left', marginRight: '12px' }} />
                Дашбоард
            </ActiveMenuItem>
            <ActiveMenuItem path="/calendar">
                <Icon name="calendar" style={{ float: 'left', marginRight: '12px' }} />
                Календарь
            </ActiveMenuItem>
            <ActiveMenuItem path="/activities">
                <Icon name="tasks" style={{ float: 'left', marginRight: '12px' }} />
                Задачи
            </ActiveMenuItem>
            <ActiveMenuItem path="/deals">
                <Icon name="handshake" style={{ float: 'left', marginRight: '12px' }} />
                Сделки
            </ActiveMenuItem>
            <ActiveMenuItem path="/leads">
                <Icon name="filter" style={{ float: 'left', marginRight: '12px' }} />
                Лиды
            </ActiveMenuItem>
            <ActiveMenuItem path="/contacts">
                <Icon name="address book" style={{ float: 'left', marginRight: '12px' }} />
                Контакты
            </ActiveMenuItem>
            <ActiveMenuItem path="/products">
                <Icon name="list ol" style={{ float: 'left', marginRight: '12px' }} />
                Продукты
            </ActiveMenuItem>
            <ActiveMenuItem path="/settings">
                <Icon name="user circle" style={{ float: 'left', marginRight: '12px' }} />
                Настройки аккаунта
            </ActiveMenuItem>
            <Menu.Item as="a" href={configuration.LogoutUrl}>
                <Icon name="log out" style={{ float: 'left', marginRight: '12px' }} />
                Выйти
            </Menu.Item>
        </>
    )
}

export default MobileSidebarMenu
