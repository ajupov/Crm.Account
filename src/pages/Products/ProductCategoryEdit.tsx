import { Button, Card, Checkbox, Dimmer, Form, Header, Icon, Input, Loader } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/changesTextHelper'

import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import useProductCategory from './hooks/useProductCategory'

const ProductCategoryEdit: FC = () => {
    const { id } = useParams()

    const entityData = useProductCategory(id)

    return (
        <ProductsMenuLayout>
            <Card fluid>
                <Card.Content>
                    <Link to="/products/categories" style={{ color: 'grey' }}>
                        <Icon name="arrow left" />
                        Назад
                    </Link>
                    <Header as="h3">Изменение категории</Header>
                    <Card.Meta textAlign="right">{getCreateDateTimeText(entityData.entity?.createDateTime)}</Card.Meta>
                    <Card.Meta textAlign="right">
                        {getLastChangeDateTimeText(entityData.entity?.modifyDateTime)}
                    </Card.Meta>
                    <Dimmer active={entityData.isLoading} inverted>
                        <Loader>Загрузка</Loader>
                    </Dimmer>
                    <Form>
                        <Form.Field required>
                            <label>Наименование</label>
                            <Input
                                placeholder="Наименование"
                                value={entityData.entity?.name}
                                // onChange={global.console.log('')}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label="Удален" checked={entityData.entity?.isDeleted} />
                        </Form.Field>
                        <Button.Group floated="right">
                            <Button basic>Отмена</Button>
                            <Button type="submit">Сохранить</Button>
                        </Button.Group>
                    </Form>
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}

export default ProductCategoryEdit
