import React, { FC, useCallback, useEffect, useState } from 'react'

import { Card } from 'semantic-ui-react'
import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import Table from '../../components/table/Table'
import getLastChangeDateTimeText from '../../helpers/lastChangeTextHelper'
import useProductCategoriesTableData from './hooks/useProductCategoriesTableData'

const defaultPageSize = 5

const ProductCategories: FC = () => {
    const [offset, setOffset] = useState<number>(0)

    const onChangePage = (page: number): void => {
        setOffset((page - 1) * defaultPageSize)
    }

    useEffect(() => {
        document.title = 'Категории'
    })

    const { totalCount, lastModifyDateTime, rows } = useProductCategoriesTableData(offset, defaultPageSize)

    return (
        <ProductsMenuLayout>
            <Card fluid>
                <Card.Content>
                    <Card.Header>Категории</Card.Header>
                    <Card.Meta>{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
                    <Card.Description>
                        <Table
                            editable
                            deletable
                            multiselectable
                            totalCount={totalCount}
                            pageSize={defaultPageSize}
                            onChangePage={onChangePage}
                            headers={['Наименование', 'Создан']}
                            rows={rows.map(category => [category.name, category.createDateTime])}
                        />
                    </Card.Description>
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}

export default ProductCategories
