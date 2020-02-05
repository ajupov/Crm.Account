import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import Clock from 'react-live-clock'
import Configuration from '../../../config/Configuration'
import { Link } from 'react-router-dom'

const AvatarAndUserElement = (
    <>
        <Image avatar src="./content/client-avatar-micro.jpg" style={{ marginRight: '1.4em' }} />
        Усман
    </>
)

export const DesktopMenu: FC = () => {
    const configuration = new Configuration()

    return (
        <>
            <Menu.Item as={Link} to="/" style={{ width: '115px' }}>
                Главная
            </Menu.Item>
            <Menu.Item position="right" header>
                <Clock format="HH:mm" ticking={true} timezone="Europe/Moscow" />
            </Menu.Item>
            <Menu.Item as={Dropdown} position="right" simple trigger={AvatarAndUserElement}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="settings">
                        <Icon name="user circle" />
                        Настройки аккаунта
                    </Dropdown.Item>
                    <Dropdown.Item as="a" href={configuration.LogoutUrl}>
                        <Icon name="log out" />
                        Выйти
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Menu.Item>
        </>
    )
}

export const DesktopSidebarMenu: FC = () => (
    <>
        <ActiveMenuItem path="/">
            <Icon name="dashboard" />
            Дашбоард
        </ActiveMenuItem>
        <ActiveMenuItem path="calendar">
            <Icon name="calendar" />
            Календарь
        </ActiveMenuItem>
        <ActiveMenuItem path="activities">
            <Icon name="tasks" />
            Задачи
        </ActiveMenuItem>
        <ActiveMenuItem path="deals">
            <Icon name="handshake" />
            Сделки
        </ActiveMenuItem>
        <ActiveMenuItem path="leads">
            <Icon name="filter" />
            Лиды
        </ActiveMenuItem>
        <ActiveMenuItem path="contacts">
            <Icon name="address book" />
            Контакты
        </ActiveMenuItem>
        <ActiveMenuItem path="products">
            <Icon name="list ol" />
            Продукты
        </ActiveMenuItem>
        <ActiveMenuItem path="settings">
            <Icon name="setting" />
            Настройки
        </ActiveMenuItem>
    </>
)
