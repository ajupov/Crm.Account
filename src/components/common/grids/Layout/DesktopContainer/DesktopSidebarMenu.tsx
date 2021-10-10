import { Icon, Menu, SemanticICONS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import CustomersRoutes from '../../../../../pages/Customers/Customers/routes/CustomersRoutes'
import { Link } from 'react-router-dom'
import ProductsRoutes from '../../../../../pages/Products/Products/routes/ProductsRoutes'

// TODO: Move to l10n
const DesktopSidebarMenu: FC = () => {
    const renderItem = useCallback(
        (title: string, path: string, icon: SemanticICONS) => (
            <Menu.Item as={Link} to={path}>
                <Icon name={icon} />
                {title}
            </Menu.Item>
        ),
        []
    )

    return (
        <>
            {renderItem('Дашборд', '/', 'line graph')}
            {renderItem('Календарь', '/calendar', 'calendar alternate outline')}
            {renderItem('Задачи', '/tasks', 'columns')}
            {renderItem('Заказы', '/orders', 'boxes')}
            {renderItem('Клиенты', CustomersRoutes.Index, 'users')}
            {renderItem('Продукты', ProductsRoutes.Index, 'list ol')}
        </>
    )
}

export default DesktopSidebarMenu
