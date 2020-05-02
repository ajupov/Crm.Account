import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import React, { FC, useCallback, useContext } from 'react'

import Clock from '../../Clock/Clock'
import Configuration from '../../../configuration/Configuration'
import { Link } from 'react-router-dom'
import UserInfoContext from '../../UserInfo/contexts/UserInfoContext/UserInfoContext'

const DesktopMenu: FC = () => {
    const state = useContext(UserInfoContext)
    const configuration = new Configuration()

    const getUserNameWithAvatar = useCallback(
        () => (
            <>
                <Icon
                    circular
                    name="user"
                    style={{ marginRight: '1em', height: '28px', lineHeight: '28px' }}
                    size="large"
                />
                {state.name}
            </>
        ),
        [state.name]
    )

    return (
        <>
            <Menu.Item as={Link} to="/" style={{ width: '130px' }}>
                <Image avatar src="/content/logo.png" style={{ marginRight: '10px' }} /> Lite CRM
            </Menu.Item>
            <Menu.Item position="right" header>
                <Clock />
            </Menu.Item>
            <Menu.Item as={Dropdown} position="right" trigger={getUserNameWithAvatar()} style={{ padding: '6px 33px' }}>
                <Dropdown.Menu direction="left">
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
