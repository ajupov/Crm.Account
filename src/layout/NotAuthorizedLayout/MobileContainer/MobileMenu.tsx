import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Path } from '../../../enums/Path'
import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'

interface IMobileMenuProps {
    onClickShow: () => void
}

export const MobileSidebarMenu = () => {
    const login = () => {
        sessionStorage.setItem('isAuthorized', 'true')
        location.reload()
    }

    return (
        <>
            <ActiveMenuItem path={Path.home}>Главная</ActiveMenuItem>
            <ActiveMenuItem path={Path.about}>О нас</ActiveMenuItem>
            <ActiveMenuItem path={Path.careers}>Вакансии</ActiveMenuItem>
            <Menu.Item onClick={login}>Войти</Menu.Item>
            <Menu.Item onClick={login}>Зарегистрироваться</Menu.Item>
        </>
    )
}

export const MobileMenu = ({ onClickShow }: IMobileMenuProps) => {
    const login = () => {
        sessionStorage.setItem('isAuthorized', 'true')
        location.reload()
    }

    return (
        <>
            <Menu.Item onClick={onClickShow}>
                <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Item position="right">
                <Button onClick={login} inverted>
                    Войти
                </Button>
                <Button onClick={login} inverted style={{ marginLeft: '0.5em' }}>
                    Зарегистрироваться
                </Button>
            </Menu.Item>
        </>
    )
}
