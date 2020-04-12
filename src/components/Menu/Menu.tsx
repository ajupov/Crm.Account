import { Header, Menu as SemanticMenu } from 'semantic-ui-react'
import React, { FC } from 'react'

import ActiveMenuItem from '../ActiveMenuItem/ActiveMenuItem'

export interface MenuItemProps {
    name: string
    path: string
}

const Menu: FC<{
    items: MenuItemProps[]
}> = ({ items }) => {
    const renderMenuItem = (x: MenuItemProps): JSX.Element => (
        <SemanticMenu.Item key={x.path} as={ActiveMenuItem} path={x.path}>
            {x.name}
        </SemanticMenu.Item>
    )

    return (
        <SemanticMenu vertical fluid>
            <SemanticMenu.Item>
                <Header as="h4">Навигация</Header>
                {items.map(x => renderMenuItem(x))}
            </SemanticMenu.Item>
        </SemanticMenu>
    )
}

export default Menu
