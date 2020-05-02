import { Icon, Image, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import Clock from '../../Clock/Clock'

interface MobileMenuProps {
    onClickShow: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ onClickShow }) => (
    <>
        <Menu.Item onClick={onClickShow}>
            <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item position="right">
            <Image avatar src="/content/logo.png" style={{ marginRight: '10px' }} /> Lite CRM
        </Menu.Item>
        <Menu.Item position="right">
            <Clock />
        </Menu.Item>
    </>
)

export default MobileMenu
