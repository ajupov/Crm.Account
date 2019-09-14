import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Path } from '../../../../enums/Path'
import { ActiveMenuItem } from '../../ActiveMenuItem/ActiveMenuItem'

interface IMobileMenuPushedProps {
    onClickShowMenu: () => void
}

export const MobileMenu = () => (
    <Menu>
        <ActiveMenuItem path={Path.home}>Главная</ActiveMenuItem>
        <ActiveMenuItem path={Path.about}>О нас</ActiveMenuItem>
        <ActiveMenuItem path={Path.careers}>Вакансии</ActiveMenuItem>
        <Menu.Item as="a" href="https://google.com">
            Войти
        </Menu.Item>
        <Menu.Item as="a" href="https://google.com">
            Зарегистрироваться
        </Menu.Item>
    </Menu>
)

export const MobileMenuPushed = ({ onClickShowMenu }: IMobileMenuPushedProps) => (
    <Menu inverted pointing secondary size="large">
        <Menu.Item onClick={onClickShowMenu}>
            <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item position="right">
            <Button as="a" href="https://google.com" inverted>
                Войти
            </Button>
            <Button as="a" href="https://google.com" inverted style={{ marginLeft: '0.5em' }}>
                Зарегистрироваться
            </Button>
        </Menu.Item>
    </Menu>
)
