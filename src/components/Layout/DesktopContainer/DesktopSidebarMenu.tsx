import React, { FC } from 'react'

import ActiveMenuItem from '../../activeMenuItem/ActiveMenuItem'
import { Icon } from 'semantic-ui-react'

const DesktopSidebarMenu: FC = () => (
    <>
        <ActiveMenuItem path="/">
            <Icon name="dashboard" />
            Дашбоард
        </ActiveMenuItem>
        <ActiveMenuItem path="calendar">
            <Icon name="calendar" />
            Календарь
        </ActiveMenuItem>
        <ActiveMenuItem path="activities">
            <Icon name="tasks" />
            Задачи
        </ActiveMenuItem>
        <ActiveMenuItem path="deals">
            <Icon name="handshake" />
            Сделки
        </ActiveMenuItem>
        <ActiveMenuItem path="leads">
            <Icon name="filter" />
            Лиды
        </ActiveMenuItem>
        <ActiveMenuItem path="contacts">
            <Icon name="address book" />
            Контакты
        </ActiveMenuItem>
        <ActiveMenuItem path="products">
            <Icon name="list ol" />
            Продукты
        </ActiveMenuItem>
    </>
)

export default DesktopSidebarMenu
