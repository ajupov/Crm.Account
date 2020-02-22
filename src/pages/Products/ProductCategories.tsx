import { Card, Header, Loader } from 'semantic-ui-react'
import React, { FC, useEffect, useState } from 'react'

import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import Table from '../../components/table/Table'
import { getFullPageName } from '../../utils/page/pageUtils'
import getLastChangeDateTimeText from '../../helpers/lastChangeTextHelper'
import { useHistory } from 'react-router'
import useProductCategoriesTableData from './hooks/useProductCategoriesTableData'

const pageName = 'Категории'
const pageSize = 5

const ProductCategories: FC = () => {
    useEffect(() => {
        document.title = getFullPageName(pageName)
    })

    const history = useHistory()
    const [offset, setOffset] = useState<number>(0)

    const onChangePage = (page: number): void => setOffset((page - 1) * pageSize)

    const { totalCount, lastModifyDateTime, rows } = useProductCategoriesTableData(offset, pageSize)

    const getTable = (): JSX.Element => (
        <>
            <Card.Header>
                <Header as="h2">{pageName}</Header>
            </Card.Header>

            <Card.Meta>{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>

            <Card.Content>
                <Table
                    headers={[
                        { value: 'Наименование', width: '8' },
                        { value: 'Создан', width: '4' }
                    ]}
                    rows={rows.map(category => ({
                        cells: [category.name, category.createDateTime],
                        onClickRow: (event: Event) => {
                            event.stopPropagation()

                            history.push(`/products/categories/${category.id}`)
                        },
                        onClickEditButton: (event: Event) => {
                            event.stopPropagation()

                            history.push(`/products/categories/${category.id}/edit`)
                        }
                    }))}
                    footer={{ pageSize, totalCount, onChangePage }}
                />
            </Card.Content>
        </>
    )

    const getLoader = (): JSX.Element => (
        <Loader active size="massive">
            Загрузка
        </Loader>
    )

    return (
        <ProductsMenuLayout>
            <Card fluid>
                <Card.Content>{rows && totalCount > 0 ? getTable() : getLoader()}</Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}
export default ProductCategories
