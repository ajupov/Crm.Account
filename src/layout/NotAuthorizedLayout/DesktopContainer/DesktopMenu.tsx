import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Path } from '../../../enums/Path'
import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'

export const DesktopMenu = () => {
    const login = () => {
        sessionStorage.setItem('isAuthorized', 'true')
        location.reload()
    }

    return (
        <>
            <ActiveMenuItem path={Path.home}>Главная</ActiveMenuItem>
            <ActiveMenuItem path={Path.about}>О нас</ActiveMenuItem>
            <ActiveMenuItem path={Path.careers}>Вакансии</ActiveMenuItem>
            <Menu.Item position="right">
                <Button inverted onClick={login}>
                    Войти
                </Button>
                <Button inverted onClick={login} style={{ marginLeft: '0.5em' }}>
                    Зарегистрироваться
                </Button>
            </Menu.Item>
        </>
    )
}
