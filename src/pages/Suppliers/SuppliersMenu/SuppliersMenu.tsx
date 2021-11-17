import React, { FC } from 'react'

import Menu from '../../../components/common/collections/Menu/Menu'
import SupplierAttributesRoutes from '../SupplierAttributes/routes/SupplierAttributesRoutes'
import SuppliersRoutes from '../Suppliers/routes/SuppliersRoutes'

const SuppliersMenu: FC = () => (
    <Menu
        items={[
            { name: 'Поставщики', path: SuppliersRoutes.Index },
            { name: 'Атрибуты', path: SupplierAttributesRoutes.Index }
        ]}
    />
)

export default SuppliersMenu
