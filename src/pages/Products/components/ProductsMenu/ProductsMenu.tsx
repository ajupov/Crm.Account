import React, { FC } from 'react'

import Menu from '../../../../components/common/collections/Menu/Menu'
import ProductAttributesRoutes from '../ProductAttributes/routes/ProductAttributesRoutes'
import ProductCategoriesRoutes from '../ProductCategories/routes/ProductCategoriesRoutes'
import ProductStatusesRoutes from '../ProductStatuses/routes/ProductStatusesRoutes'
import ProductsRoutes from '../Products/routes/ProductsRoutes'

const ProductsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Продукты', path: ProductsRoutes.Index },
            { name: 'Категории', path: ProductCategoriesRoutes.Index },
            { name: 'Атрибуты', path: ProductAttributesRoutes.Index },
            { name: 'Статусы', path: ProductStatusesRoutes.Index }
        ]}
    />
)

export default ProductsMenu
