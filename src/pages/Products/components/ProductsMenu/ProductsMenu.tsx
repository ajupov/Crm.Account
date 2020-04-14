import React, { FC } from 'react'

import Menu from '../../../../components/Menu/Menu'
import { ProductCategoriesRoutes } from '../ProductCategories/routes/ProductCategoriesRoutes'

const ProductsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Продукты', path: '/products' },
            { name: 'Категории', path: ProductCategoriesRoutes.Index },
            { name: 'Атрибуты', path: '/products/attributes' },
            { name: 'Статусы', path: '/products/statuses' }
        ]}
    />
)

export default ProductsMenu
