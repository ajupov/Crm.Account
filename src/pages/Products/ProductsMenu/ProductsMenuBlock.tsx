/* eslint-disable react/jsx-no-bind */

import { Header, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import ProductsMenuItem from './ProductsMenuItem'

const ProductsMenuBlock: FC = () => (
    <Menu vertical fluid>
        <Menu.Item>
            <Header as="h4">Навигация</Header>
        </Menu.Item>
        <ProductsMenuItem name="Продукты" path="/products" />
        <ProductsMenuItem name="Категории" path="/products/categories" />
        <ProductsMenuItem name="Атрибуты" path="/products/attributes" />
        <ProductsMenuItem name="Статусы" path="/products/statuses" />
    </Menu>
)

export default ProductsMenuBlock
