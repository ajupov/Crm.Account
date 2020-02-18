import { Button, Card, Checkbox } from 'semantic-ui-react'
import React, { FC, useEffect } from 'react'

import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import Table from '../../components/table/Table'
import useProductCategories from './hooks/useProductCategories'

const ProductCategories: FC = () => {
    useEffect(() => {
        document.title = 'Категории'
    })

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const { totalCount, lastModifyDateTime, categories } = useProductCategories(0, 5)

    return (
        <ProductsMenuLayout>
            <Card fluid>
                <Card.Content>
                    <Card.Header>Категории</Card.Header>
                    <Card.Meta>{`Последнее изменение ${lastModifyDateTime}`}</Card.Meta>
                    <Card.Description>
                        <Table
                            headers={[<Checkbox key="Название" />, 'Название', 'Создан', '']}
                            rows={categories.map(category => [
                                <Checkbox key={category.id} />,
                                category.name,
                                category.createDateTime,
                                [
                                    <Button.Group basic size="small" key={category.id}>
                                        <Button icon="edit" />
                                        <Button icon="remove" />
                                    </Button.Group>
                                ]
                            ])}
                            totalCount={totalCount}
                        />
                    </Card.Description>
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}

export default ProductCategories
