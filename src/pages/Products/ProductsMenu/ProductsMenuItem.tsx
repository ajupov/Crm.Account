import { Button, Icon, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import ActiveMenuItem from '../../../components/activeMenuItem/ActiveMenuItem'

interface ProductsMenuItemProps {
    name: string
    path: string
    onClick?: (event: React.MouseEvent) => void
}

const ProductsMenuItem: FC<ProductsMenuItemProps> = ({ name, path, onClick }): JSX.Element => (
    <Menu.Item as={ActiveMenuItem} path={path}>
        {name}
    </Menu.Item>
)

export default ProductsMenuItem
