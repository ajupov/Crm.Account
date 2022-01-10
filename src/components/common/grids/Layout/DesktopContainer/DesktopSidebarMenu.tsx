import { Icon, Menu, SemanticICONS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import CustomersRoutes from '../../../../../pages/Customers/Customers/routes/CustomersRoutes'
import { Link } from 'react-router-dom'
import OrdersRoutes from '../../../../../pages/Orders/Orders/routes/OrdersRoutes'
import ProductsRoutes from '../../../../../pages/Products/Products/routes/ProductsRoutes'
import StockBalancesRoutes from '../../../../../pages/Stock/StockBalances/routes/StockBalancesRoutes'
import SuppliersRoutes from '../../../../../pages/Suppliers/Suppliers/routes/SuppliersRoutes'
import TasksRoutes from '../../../../../pages/Tasks/Tasks/routes/TasksRoutes'

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
            {renderItem('Задачи', TasksRoutes.Index, 'columns')}
            {renderItem('Заказы', OrdersRoutes.Index, 'boxes')}
            {renderItem('Клиенты', CustomersRoutes.Index, 'users')}
            {renderItem('Продукты', ProductsRoutes.Index, 'list ol')}
            {renderItem('Поставщики', SuppliersRoutes.Index, 'truck')}
            {renderItem('Остатки', StockBalancesRoutes.Index, 'warehouse')}
        </>
    )
}

export default DesktopSidebarMenu
