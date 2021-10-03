import React, { FC } from 'react'

import OrderAttributesRoutes from '../OrderAttributes/routes/OrderAttributesRoutes'
import OrderStatusesRoutes from '../OrderStatuses/routes/OrderStatusesRoutes'
import OrderTypesRoutes from '../OrderTypes/routes/OrderTypesRoutes'
import OrdersRoutes from '../Orders/routes/OrdersRoutes'
import Menu from '../../../components/common/collections/Menu/Menu'

const OrdersMenu: FC = () => (
    <Menu
        items={[
            { name: 'Сделки', path: OrdersRoutes.Index },
            { name: 'Атрибуты', path: OrderAttributesRoutes.Index },
            { name: 'Типы', path: OrderTypesRoutes.Index },
            { name: 'Статусы', path: OrderStatusesRoutes.Index }
        ]}
    />
)

export default OrdersMenu
