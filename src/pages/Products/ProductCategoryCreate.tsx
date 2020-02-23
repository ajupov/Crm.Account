import { Button, Card, Form, Header, Icon, Input } from 'semantic-ui-react'
import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'

const ProductCategoryCreate: FC = () => (
    <ProductsMenuLayout>
        <Card fluid>
            <Card.Content>
                <Link to="/products/categories" style={{ color: 'grey' }}>
                    <Icon name="arrow left" />
                    Назад
                </Link>
                <Header as="h3">Добавление категории</Header>
                <Form>
                    <Form.Field required>
                        <label>Наименование</label>
                        <Input placeholder="Наименование" />
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

export default ProductCategoryCreate
