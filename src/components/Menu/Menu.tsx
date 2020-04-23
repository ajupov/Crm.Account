import { Header, Responsive, Menu as SemanticMenu } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import ActiveMenuItem from '../ActiveMenuItem/ActiveMenuItem'

export interface MenuItemProps {
    name: string
    path: string
}

const Menu: FC<{
    items: MenuItemProps[]
}> = ({ items }) => {
    const renderMenuItem = useCallback(
        (x: MenuItemProps) => (
            <SemanticMenu.Item key={x.path} as={ActiveMenuItem} path={x.path}>
                {x.name}
            </SemanticMenu.Item>
        ),
        []
    )

    return (
        <>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <SemanticMenu fluid tabular size="mini">
                    {items.map(x => renderMenuItem(x))}
                </SemanticMenu>
            </Responsive>
            <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                <SemanticMenu fluid vertical borderless>
                    <SemanticMenu.Item>
                        <Header as="h4">Навигация</Header>
                    </SemanticMenu.Item>
                    {items.map(x => renderMenuItem(x))}
                </SemanticMenu>
            </Responsive>
        </>
    )
}

export default Menu
