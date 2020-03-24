/* eslint-disable @typescript-eslint/indent */
/* eslint-disable sonarjs/no-identical-functions */

import { Button, Card, Checkbox, Form, Grid, Header, Icon, Input } from 'semantic-ui-react'
import React, { FC, useEffect, useState } from 'react'

import ProductCategoryDelete from './ProductCategoryDelete'
import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import Table from '../../components/table/Table'
import { getFullPageName } from '../../utils/page/pageUtils'
import { getLastChangeDateTimeText } from '../../helpers/changesTextHelper'
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
    const [deleteIds, setDeleteIds] = useState<string[]>([])
    const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false)

    const onChangePage = (page: number): void => setOffset((page - 1) * pageSize)
    const onDelete = (): void => {
        // eslint-disable-next-line no-alert
        alert(deleteIds)
        setIsShowDeleteModal(false)
    }
    const onClose = (): void => setIsShowDeleteModal(false)

    const { isLoading, totalCount, lastModifyDateTime, rows } = useProductCategoriesTableData(offset, pageSize)

    const onClickCreate = (): void => {
        history.push('/products/categories/create')
    }

    const getTable = (): JSX.Element => (
        <Table
            isLoading={isLoading}
            headerCells={[
                { value: 'Наименование', width: 8 },
                { value: 'Создан', width: 3 }
            ]}
            rows={rows.map(category => ({
                cells: [
                    { value: category.name, textAlign: 'left' },
                    { value: toLocaleDateTime(category.createDateTime), textAlign: 'center' }
                ],
                isDeleted: category.isDeleted,
                onClickRow: (event: Event) => {
                    history.push(`/products/categories/view/${category.id}`)
                    event.stopPropagation()
                },
                onClickEditButton: (event: React.MouseEvent) => {
                    history.push(`/products/categories/edit/${category.id}`)
                    event.stopPropagation()
                },
                onClickDeleteButton: (event: React.MouseEvent) => {
                    setDeleteIds([category.id])
                    setIsShowDeleteModal(true)
                    event.stopPropagation()
                },
                onClickRestoreButton: (event: React.MouseEvent) => {
                    setDeleteIds([category.id])
                    setIsShowDeleteModal(true)
                    event.stopPropagation()
                }
            }))}
            footer={{ pageSize, totalCount, onChangePage }}
        />
    )

    const getFilters = (): JSX.Element => (
        <Card fluid>
            <Card.Content>
                <Header as="h4">Фильтры</Header>
                <Form>
                    <Form.Field>
                        <label>Наименование:</label>
                        <Input size="mini" fluid placeholder="Наименование" />
                    </Form.Field>
                    <Form.Field>
                        <label>Дата создания:</label>
                        <Input size="mini" type="date" value="2020-03-01" min="2020-03-01" label="с" />
                        <Input size="mini" type="date" value="2021-03-01" min="2020-03-01" label="по" />
                    </Form.Field>
                    <Form.Field>
                        <label>Статус:</label>
                        <Checkbox size="mini" radio label="Действующие" name="checkboxRadioGroup" checked />
                        <Checkbox size="mini" radio label="Удаленные" name="checkboxRadioGroup" />
                    </Form.Field>
                    <Form.Field>
                        <Button.Group size="mini" floated="right">
                            <Button basic>Сброc</Button>
                            <Button onClick={onDelete}>Применить</Button>
                        </Button.Group>
                    </Form.Field>
                </Form>
            </Card.Content>
        </Card>
    )

    const getButtons = (): JSX.Element => (
        <Grid verticalAlign="middle">
            <Grid.Column width={11}>
                <Card.Meta floated="left">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
            </Grid.Column>
            <Grid.Column width={5}>
                <Button.Group basic size="mini" floated="right">
                    <Button icon>
                        <Icon name="add" /> Создать
                    </Button>
                    <Button icon>
                        <Icon name="download" /> Выгрузить в CSV
                    </Button>
                </Button.Group>
            </Grid.Column>
        </Grid>
    )

    return (
        <ProductsMenuLayout filters={getFilters()} isShowFilters>
            <Card fluid>
                <Card.Content>
                    <Header as="h3">{pageName}</Header>
                    <ProductCategoryDelete isOpen={isShowDeleteModal} onClose={onClose} onDelete={onDelete} />

                    {getButtons()}
                    {getTable()}
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}
export default ProductCategories
