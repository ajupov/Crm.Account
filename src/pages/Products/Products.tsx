/* eslint-disable sonarjs/no-duplicate-string */

import React, { FC, useEffect } from 'react'

import { Card } from 'semantic-ui-react'
import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import Table from '../../components/table/Table'

const Products: FC = () => {
    useEffect(() => {
        document.title = 'Продукты'
    })

    return (
        <ProductsMenuLayout>
            <Card fluid>
                <Card.Content>
                    <Card.Header>Продукты</Card.Header>
                    <Card.Meta>Последнее изменение 2 часа назад</Card.Meta>
                    <Card.Description>
                        <Table
                            headers={['Наименование', 'Артикул', 'Цена']}
                            rows={[
                                ['Продукт 1', '12345678', '12.90'],
                                ['Продукт 1', '12345678', '12.90'],
                                ['Продукт 1', '12345678', '12.90'],
                                ['Продукт 1', '12345678', '12.90'],
                                ['Продукт 1', '12345678', '12.90']
                            ]}
                            totalCount={0}
                        />
                    </Card.Description>
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}

export default Products
