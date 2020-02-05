import { Icon, Image, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import Clock from 'react-live-clock'
import Configuration from '../../../config/Configuration'
import { Link } from 'react-router-dom'

interface IMobileMenuProps {
    onClickShow: () => void
}

const AvatarAndUserElement = (
    <>
        <Image avatar src="./content/client-avatar-micro.jpg" style={{ marginRight: '1.4em' }} />
        Усман
    </>
)

export const MobileSidebarMenu: FC = () => {
    const configuration = new Configuration()

    return (
        <>
            <Menu.Item as={Link} to="settings" style={{ height: '68px', lineHeight: '48px' }}>
                {AvatarAndUserElement}
            </Menu.Item>
            <ActiveMenuItem path="dashboard">
                <Icon name="dashboard" style={{ float: 'left', marginRight: '12px' }} />
                Дашбоард
            </ActiveMenuItem>
            <ActiveMenuItem path="calendar">
                <Icon name="calendar" style={{ float: 'left', marginRight: '12px' }} />
                Календарь
            </ActiveMenuItem>
            <ActiveMenuItem path="activities">
                <Icon name="tasks" style={{ float: 'left', marginRight: '12px' }} />
                Задачи
            </ActiveMenuItem>
            <ActiveMenuItem path="deals">
                <Icon name="handshake" style={{ float: 'left', marginRight: '12px' }} />
                Сделки
            </ActiveMenuItem>
            <ActiveMenuItem path="leads">
                <Icon name="filter" style={{ float: 'left', marginRight: '12px' }} />
                Лиды
            </ActiveMenuItem>
            <ActiveMenuItem path="contacts">
                <Icon name="address book" style={{ float: 'left', marginRight: '12px' }} />
                Контакты
            </ActiveMenuItem>
            <ActiveMenuItem path="products">
                <Icon name="list ol" style={{ float: 'left', marginRight: '12px' }} />
                Продукты
            </ActiveMenuItem>
            <ActiveMenuItem path="settings">
                <Icon name="setting" style={{ float: 'left', marginRight: '12px' }} />
                Настройки
            </ActiveMenuItem>
            <Menu.Item as="a" href={configuration.LogoutUrl}>
                <Icon name="log out" style={{ float: 'left', marginRight: '12px' }} />
                Выйти
            </Menu.Item>
        </>
    )
}

export const MobileMenu: FC<IMobileMenuProps> = ({ onClickShow }) => (
    <>
        <Menu.Item onClick={onClickShow}>
            <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item position="right">
            <Clock format="HH:mm" ticking={true} timezone="Europe/Moscow" />
        </Menu.Item>
        <Menu.Item position="right">Главная</Menu.Item>
    </>
)
