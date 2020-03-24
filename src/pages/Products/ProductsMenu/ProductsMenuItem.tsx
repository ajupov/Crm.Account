import React, { FC } from 'react'

import ActiveMenuItem from '../../../components/activeMenuItem/ActiveMenuItem'
import { Menu } from 'semantic-ui-react'

interface ProductsMenuItemProps {
    name: string
    path: string
}

const ProductsMenuItem: FC<ProductsMenuItemProps> = ({ name, path }): JSX.Element => (
    <Menu.Item as={ActiveMenuItem} path={path}>
        {name}
    </Menu.Item>
)

export default ProductsMenuItem
