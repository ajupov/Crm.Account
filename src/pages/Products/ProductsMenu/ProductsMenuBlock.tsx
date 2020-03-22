/* eslint-disable react/jsx-no-bind */

import { Header, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import ProductsMenuItem from './ProductsMenuItem'

const ProductsMenuBlock: FC = () => (
    <Menu vertical fluid>
        <Menu.Item>
            <Header as="h4">Навигация</Header>
        </Menu.Item>
        <ProductsMenuItem name="Продукты" path="/products" onClick={event => event.preventDefault()} />
        <ProductsMenuItem name="Категории" path="/products/categories" onClick={event => event.preventDefault()} />
        <ProductsMenuItem name="Атрибуты" path="/products/attributes" onClick={event => event.preventDefault()} />
        <ProductsMenuItem name="Статусы" path="/products/statuses" onClick={event => event.preventDefault()} />
    </Menu>
)

export default ProductsMenuBlock
