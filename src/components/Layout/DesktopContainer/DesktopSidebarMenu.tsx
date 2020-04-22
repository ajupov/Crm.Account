import { Icon, SemanticICONS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import ActiveMenuItem from '../../ActiveMenuItem/ActiveMenuItem'

const DesktopSidebarMenu: FC = () => {
    const renderItem = useCallback(
        (title: string, path: string, icon: SemanticICONS): JSX.Element => (
            <ActiveMenuItem path={path}>
                <Icon name={icon} />
                {title}
            </ActiveMenuItem>
        ),
        []
    )

    return (
        <>
            {renderItem('Дашбоард', '/', 'dashboard')}
            {/* {renderItem('Календарь', '/calendar', 'calendar')} */}
            {renderItem('Задачи', '/activities', 'tasks')}
            {renderItem('Сделки', '/deals', 'handshake')}
            {renderItem('Лиды', '/leads', 'filter')}
            {renderItem('Контакты', '/contacts', 'address book')}
            {renderItem('Продукты', '/products', 'list ol')}
        </>
    )
}

export default DesktopSidebarMenu
