import React, { FC } from 'react'

import Menu from '../../../components/common/collections/Menu/Menu'
import OrderAttributesRoutes from '../OrderAttributes/routes/OrderAttributesRoutes'
import OrderStatusesRoutes from '../OrderStatuses/routes/OrderStatusesRoutes'
import OrderTypesRoutes from '../OrderTypes/routes/OrderTypesRoutes'
import OrdersRoutes from '../Orders/routes/OrdersRoutes'

const OrdersMenu: FC = () => (
    <Menu
        items={[
            { name: 'Заказы', path: OrdersRoutes.Index },
            { name: 'Типы', path: OrderTypesRoutes.Index },
            { name: 'Статусы', path: OrderStatusesRoutes.Index },
            { name: 'Атрибуты', path: OrderAttributesRoutes.Index }
        ]}
    />
)

export default OrdersMenu
