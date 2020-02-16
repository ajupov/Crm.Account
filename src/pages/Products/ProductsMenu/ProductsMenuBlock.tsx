/* eslint-disable react/jsx-no-bind */

import React, { FC } from 'react'

import { Menu } from 'semantic-ui-react'
import ProductsMenuItem from './ProductsMenuItem'

const ProductsMenuBlock: FC = () => (
    <Menu vertical fluid size="large">
        <ProductsMenuItem name="Продукты" path="/products" onClick={event => event.preventDefault()} />
        <ProductsMenuItem name="Категории" path="/products/categories" onClick={event => event.preventDefault()} />
        <ProductsMenuItem name="Атрибуты" path="/products/attributes" onClick={event => event.preventDefault()} />
        <ProductsMenuItem name="Статусы" path="/products/statuses" onClick={event => event.preventDefault()} />
    </Menu>
)

export default ProductsMenuBlock
