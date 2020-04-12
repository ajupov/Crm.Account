import React, { FC } from 'react'

import Menu from '../../../../components/Menu/Menu'

const ProductsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Продукты', path: '/products' },
            { name: 'Категории', path: '/products/categories' },
            { name: 'Атрибуты', path: '/products/attributes' },
            { name: 'Статусы', path: '/products/statuses' }
        ]}
    />
)

export default ProductsMenu
