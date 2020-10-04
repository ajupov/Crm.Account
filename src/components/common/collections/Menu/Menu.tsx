import { Header, Menu as SemanticMenu } from 'semantic-ui-react'
import { Media, MediaContextProvider } from '../../../../tokens/Tokens'
import React, { FC, useCallback } from 'react'

import ActiveMenuItem from './ActiveMenuItem/ActiveMenuItem'

export interface MenuItemProps {
    name: string
    path: string
}

// TODO: Move to l10n
const Menu: FC<{ items: MenuItemProps[] }> = ({ items }) => {
    const renderMenuItem = useCallback(
        (x: MenuItemProps) => (
            <SemanticMenu.Item key={x.path} as={ActiveMenuItem} path={x.path}>
                {x.name}
            </SemanticMenu.Item>
        ),
        []
    )

    return (
        <MediaContextProvider>
            <Media lessThan="tablet">
                <SemanticMenu fluid tabular size="mini">
                    {items.map(x => renderMenuItem(x))}
                </SemanticMenu>
            </Media>
            <Media greaterThanOrEqual="tablet">
                <SemanticMenu fluid vertical borderless>
                    <SemanticMenu.Item>
                        <Header as="h4">Навигация</Header>
                    </SemanticMenu.Item>
                    {items.map(x => renderMenuItem(x))}
                </SemanticMenu>
            </Media>
        </MediaContextProvider>
    )
}

export default Menu
