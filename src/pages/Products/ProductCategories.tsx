import { Button, Card, Checkbox, Icon } from 'semantic-ui-react'
import React, { FC, useEffect } from 'react'

import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import Table from '../../components/table/Table'
import useProductCategories from './hooks/useProductCategories'

const ProductCategories: FC = () => {
    useEffect(() => {
        document.title = 'Категории'
    })

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const categories = useProductCategories(0, 5)

    return (
        <ProductsMenuLayout>
            <Card fluid>
                <Card.Content>
                    <Card.Header>Категории</Card.Header>
                    <Card.Meta>Последнее изменение 2 часа назад</Card.Meta>
                    <Card.Description>
                        <Table
                            headers={[<Checkbox key={'Название'} />, 'Название']}
                            rows={categories.map(category => [
                                <Checkbox key={category.name} />,
                                category.name,
                                <Button key={category.name} as={Icon} name="cart" />
                            ])}
                        />
                    </Card.Description>
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}

export default ProductCategories
