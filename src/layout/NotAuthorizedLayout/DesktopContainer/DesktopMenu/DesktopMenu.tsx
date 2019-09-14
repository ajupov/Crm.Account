import React from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import { Path } from '../../../../enums/Path'
import { ActiveMenuItem } from '../../ActiveMenuItem/ActiveMenuItem'

interface IDesktopMenuProps {
    isVisible: boolean
}

export const DesktopMenu = ({ isVisible }: IDesktopMenuProps) => (
    <Menu inverted={!isVisible} pointing={!isVisible} secondary={!isVisible} size="large">
        <Container>
            <ActiveMenuItem path={Path.home}>Главная</ActiveMenuItem>
            <ActiveMenuItem path={Path.about}>О нас</ActiveMenuItem>
            <ActiveMenuItem path={Path.careers}>Вакансии</ActiveMenuItem>
            <Menu.Item position="right">
                <Button as="a" inverted={!isVisible} href="https://google.com">
                    Войти
                </Button>
                <Button
                    as="a"
                    inverted={!isVisible}
                    primary={isVisible}
                    style={{ marginLeft: '0.5em' }}
                    href="https://google.com"
                >
                    Зарегистрироваться
                </Button>
            </Menu.Item>
        </Container>
    </Menu>
)
