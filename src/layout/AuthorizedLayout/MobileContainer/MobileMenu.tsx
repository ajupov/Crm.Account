import React from 'react'
import Clock from 'react-live-clock'
import { Menu, Icon, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Path } from '../../../enums/Path'
import { GetTitle } from '../../../helpers/TitleHelper'
import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
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

export const MobileSidebarMenu = () => {
    const logout = () => {
        sessionStorage.removeItem('isAuthorized')
        location.reload()
    }

    return (
        <>
            <Menu.Item as={Link} to={Path.account} style={{ height: '68px', lineHeight: '48px' }}>
                {AvatarAndUserElement}
            </Menu.Item>
            <ActiveMenuItem path={Path.dashboard}>
                <Icon name="dashboard" style={{ float: 'left', marginRight: '12px' }} />
                Дашбоард
            </ActiveMenuItem>
            <ActiveMenuItem path={Path.calendar}>
                <Icon name="calendar" style={{ float: 'left', marginRight: '12px' }} />
                Календарь
            </ActiveMenuItem>
            <ActiveMenuItem path={Path.activities}>
                <Icon name="tasks" style={{ float: 'left', marginRight: '12px' }} />
                Задачи
            </ActiveMenuItem>
            <ActiveMenuItem path={Path.deals}>
                <Icon name="handshake" style={{ float: 'left', marginRight: '12px' }} />
                Сделки
            </ActiveMenuItem>
            <ActiveMenuItem path={Path.leads}>
                <Icon name="filter" style={{ float: 'left', marginRight: '12px' }} />
                Лиды
            </ActiveMenuItem>
            <ActiveMenuItem path={Path.contacts}>
                <Icon name="address book" style={{ float: 'left', marginRight: '12px' }} />
                Контакты
            </ActiveMenuItem>
            <ActiveMenuItem path={Path.products}>
                <Icon name="list ol" style={{ float: 'left', marginRight: '12px' }} />
                Продукты
            </ActiveMenuItem>
            <ActiveMenuItem path={Path.settings}>
                <Icon name="setting" style={{ float: 'left', marginRight: '12px' }} />
                Настройки
            </ActiveMenuItem>
            <Menu.Item onClick={logout}>
                <Icon name="log out" style={{ float: 'left', marginRight: '12px' }} />
                Выйти
            </Menu.Item>
        </>
    )
}

export const MobileMenu = ({ onClickShow }: IMobileMenuProps) => (
    <>
        <Menu.Item onClick={onClickShow}>
            <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item position="right">
            <Clock format="HH:mm" ticking={true} timezone="Europe/Moscow" />
        </Menu.Item>
        <Menu.Item position="right">{GetTitle()}</Menu.Item>
    </>
)
