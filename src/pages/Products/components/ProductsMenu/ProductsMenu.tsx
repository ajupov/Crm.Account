import React, { FC } from 'react'

import { Menu as SemanticMenu } from 'semantic-ui-react'

const ProductsMenu: FC = () => (
    <SemanticMenu
        items={[
            { name: 'Продукты', path: '/products' },
            { name: 'Категории', path: '/products/categories' },
            { name: 'Атрибуты', path: '/products/attributes' },
            { name: 'Статусы', path: '/products/statuses' }
        ]}
    />
)

export default ProductsMenu
