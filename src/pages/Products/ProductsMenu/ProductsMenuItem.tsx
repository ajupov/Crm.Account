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
        {onClick ? (
            <Button icon size="mini" toggle basic floated="right" onClick={onClick}>
                <Icon name="add" />
            </Button>
        ) : null}
        <Menu.Header as="p" floated="left" style={{ fontWeight: 'normal' }}>
            {name}
        </Menu.Header>
    </Menu.Item>
)

export default ProductsMenuItem
