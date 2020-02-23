import { Card, Header } from 'semantic-ui-react'
import React, { FC, useEffect, useState } from 'react'

import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import Table from '../../components/table/Table'
import { getFullPageName } from '../../utils/page/pageUtils'
import getLastChangeDateTimeText from '../../helpers/lastChangeTextHelper'
import { toLocaleDateTime } from '../../utils/datetime/dateTimeUtils'
import { useHistory } from 'react-router'
import useProductCategoriesTableData from './hooks/useProductCategoriesTableData'

const pageName = 'Категории'
const pageSize = 10

const ProductCategories: FC = () => {
    useEffect(() => {
        document.title = getFullPageName(pageName)
    })

    const history = useHistory()
    const [offset, setOffset] = useState<number>(0)

    const onChangePage = (page: number): void => setOffset((page - 1) * pageSize)

    const { isLoading, totalCount, lastModifyDateTime, rows } = useProductCategoriesTableData(offset, pageSize)

    const getTable = (): JSX.Element => (
        <Table
            isLoading={isLoading}
            headers={[
                { value: 'Наименование', width: '8', sorting: '' },
                { value: 'Создан', width: '3', sorting: '' }
            ]}
            rows={rows.map(category => ({
                cells: [
                    { value: category.name, textAlign: 'left' },
                    { value: toLocaleDateTime(category.createDateTime), textAlign: 'center' }
                ],
                onClickRow: (event: Event) => {
                    history.push(`/products/categories/${category.id}`)
                    event.stopPropagation()
                },
                onClickEditButton: (event: React.MouseEvent) => {
                    history.push(`/products/categories/${category.id}/edit`)
                    event.stopPropagation()
                },
                onClickDeleteButton: (event: React.MouseEvent) => {
                    history.push(`/products/categories/${category.id}/edit`)
                    event.stopPropagation()
                }
            }))}
            footer={{ pageSize, totalCount, onChangePage }}
        />
    )

    return (
        <ProductsMenuLayout>
            <Card fluid>
                <Card.Content>
                    <Header as="h3">{pageName}</Header>
                    <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
                    {getTable()}
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}
export default ProductCategories
