import { Icon, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import Clock from 'react-live-clock'
import { getPageTitle } from '../../../helpers/pageHelper'

interface MobileMenuProps {
    onClickShow: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ onClickShow }) => (
    <>
        <Menu.Item onClick={onClickShow}>
            <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item position="right">
            <Clock format="HH:mm" ticking={true} timezone="Europe/Moscow" />
        </Menu.Item>
        <Menu.Item position="right">{getPageTitle()}</Menu.Item>
    </>
)

export default MobileMenu
