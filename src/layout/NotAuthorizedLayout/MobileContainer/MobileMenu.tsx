import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Path } from '../../../enums/Path'
import { ActiveMenuItem } from '../ActiveMenuItem/ActiveMenuItem'

interface IMobileMenuProps {
    onClickShow: () => void
}

export const MobileSidebarMenu = () => (
    <>
        <ActiveMenuItem path={Path.home}>Главная</ActiveMenuItem>
        <ActiveMenuItem path={Path.about}>О нас</ActiveMenuItem>
        <ActiveMenuItem path={Path.careers}>Вакансии</ActiveMenuItem>
        <Menu.Item as="a" href="https://google.com">
            Войти
        </Menu.Item>
        <Menu.Item as="a" href="https://google.com">
            Зарегистрироваться
        </Menu.Item>
    </>
)

export const MobileMenu = ({ onClickShow }: IMobileMenuProps) => (
    <>
        <Menu.Item onClick={onClickShow}>
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
    </>
)
