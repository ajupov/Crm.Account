import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Path } from '../../../enums/Path'
import { ActiveMenuItem } from '../ActiveMenuItem/ActiveMenuItem'

export const DesktopMenu = () => (
    <>
        <ActiveMenuItem path={Path.home}>Главная</ActiveMenuItem>
        <ActiveMenuItem path={Path.about}>О нас</ActiveMenuItem>
        <ActiveMenuItem path={Path.careers}>Вакансии</ActiveMenuItem>
        <Menu.Item position="right">
            <Button as="a" inverted href="https://google.com">
                Войти
            </Button>
            <Button as="a" inverted href="https://google.com" style={{ marginLeft: '0.5em' }}>
                Зарегистрироваться
            </Button>
        </Menu.Item>
    </>
)
