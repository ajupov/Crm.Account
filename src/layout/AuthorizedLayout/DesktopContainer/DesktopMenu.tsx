import React from 'react'
import Clock from 'react-live-clock'
import { Menu, Image, Icon, Dropdown } from 'semantic-ui-react'
import { Path } from '../../../enums/Path'
import { Link } from 'react-router-dom'
import { GetTitle } from '../../../helpers/TitleHelper'
import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'

const AvatarAndUserElement = (
    <>
        <Image avatar src="./content/client-avatar-micro.jpg" style={{ marginRight: '1.4em' }} />
        Усман
    </>
)

export const DesktopMenu = () => {
    const logout = () => {
        sessionStorage.removeItem('isAuthorized')
        location.reload()
    }

    return (
        <>
            <Menu.Item as={Link} to={Path.dashboard} style={{ width: '115px' }}>
                {GetTitle()}
            </Menu.Item>
            <Menu.Item position="right" header>
                <Clock format="HH:mm" ticking={true} timezone="Europe/Moscow" />
            </Menu.Item>
            <Menu.Item as={Dropdown} position="right" simple trigger={AvatarAndUserElement}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={Path.account}>
                        <Icon name="user circle" />
                        Мой аккаунт
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logout}>
                        <Icon name="log out" />
                        Выйти
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Menu.Item>
        </>
    )
}

export const DesktopSidebarMenu = () => (
    <>
        <ActiveMenuItem path={Path.dashboard}>
            <Icon name="dashboard" />
            Дашбоард
        </ActiveMenuItem>
        <ActiveMenuItem path={Path.calendar}>
            <Icon name="calendar" />
            Календарь
        </ActiveMenuItem>
        <ActiveMenuItem path={Path.activities}>
            <Icon name="tasks" />
            Задачи
        </ActiveMenuItem>
        <ActiveMenuItem path={Path.deals}>
            <Icon name="handshake" />
            Сделки
        </ActiveMenuItem>
        <ActiveMenuItem path={Path.leads}>
            <Icon name="filter" />
            Лиды
        </ActiveMenuItem>
        <ActiveMenuItem path={Path.contacts}>
            <Icon name="address book" />
            Контакты
        </ActiveMenuItem>
        <ActiveMenuItem path={Path.products}>
            <Icon name="list ol" />
            Продукты
        </ActiveMenuItem>
        <ActiveMenuItem path={Path.settings}>
            <Icon name="setting" />
            Настройки
        </ActiveMenuItem>
    </>
)
