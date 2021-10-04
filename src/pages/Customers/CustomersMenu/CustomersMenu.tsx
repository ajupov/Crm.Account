import React, { FC } from 'react'

import CustomerAttributesRoutes from '../CustomerAttributes/routes/CustomerAttributesRoutes'
import CustomerSourcesRoutes from '../CustomerSources/routes/CustomerSourcesRoutes'
import CustomersRoutes from '../Customers/routes/CustomersRoutes'
import Menu from '../../../components/common/collections/Menu/Menu'

const CustomersMenu: FC = () => (
    <Menu
        items={[
            { name: 'Клиенты', path: CustomersRoutes.Index },
            { name: 'Источники', path: CustomerSourcesRoutes.Index },
            { name: 'Атрибуты', path: CustomerAttributesRoutes.Index }
        ]}
    />
)

export default CustomersMenu
