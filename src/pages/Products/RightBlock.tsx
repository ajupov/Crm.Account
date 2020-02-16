import { Button, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import ActiveMenuItem from '../../components/activeMenuItem/ActiveMenuItem'

const RightBlock: FC = () => {
    const renderMenuItem = (name: string, path: string, onClick?: (event: React.MouseEvent) => void): JSX.Element => (
        <Menu.Item as={ActiveMenuItem} path={path}>
            {onClick ? (
                <Button size="mini" color="black" floated="right" onClick={onClick}>
                    Добавить
                </Button>
            ) : null}
            <Menu.Header floated="left">{name}</Menu.Header>
        </Menu.Item>
    )

    return (
        <Menu vertical fluid size="large">
            {renderMenuItem('Продукты', '/products', event => event.preventDefault())}
            {renderMenuItem('Категории', '/products/categories', event => event.preventDefault())}
            {renderMenuItem('Атрибуты', '/products/attributes', event => event.preventDefault())}
            {renderMenuItem('Статусы', '/products/statuses', event => event.preventDefault())}
        </Menu>
    )
}

export default RightBlock
