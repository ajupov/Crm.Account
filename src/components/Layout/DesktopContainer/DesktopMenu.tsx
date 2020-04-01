import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import React, { FC, useContext } from 'react'

import Clock from 'react-live-clock'
import Configuration from '../../../configuration/Configuration'
import { Link } from 'react-router-dom'
import UserInfoContext from '../../../contexts/userInfo/UserInfoContext'

const DesktopMenu: FC = () => {
    const configuration = new Configuration()
    const { name } = useContext(UserInfoContext)

    const getUserNameWithAvatar = (): JSX.Element => (
        <>
            <Icon
                circular
                name="user"
                style={{ marginRight: '1em', height: '28px', lineHeight: '28px' }}
                size="large"
            />
            {name}
        </>
    )

    return (
        <>
            <Menu.Item as={Link} to="/" style={{ width: '115px' }}>
                Главная
            </Menu.Item>
            <Menu.Item position="right" header>
                <Clock format="HH:mm" ticking={true} timezone="Europe/Moscow" />
            </Menu.Item>
            <Menu.Item
                as={Dropdown}
                position="right"
                simple
                trigger={getUserNameWithAvatar()}
                style={{ padding: '6px 33px' }}
            >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/settings">
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

export default DesktopMenu
