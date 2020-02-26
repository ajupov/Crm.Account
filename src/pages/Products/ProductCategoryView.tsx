import { Button, Card, Checkbox, Dimmer, Header, Icon, Item, Loader } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/changesTextHelper'

import ProductsMenuLayout from './ProductsMenu/ProductsMenuLayout'
import useProductCategory from './hooks/useProductCategory'

const ProductCategoryView: FC = () => {
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
                    <Header as="h3">Просмотр категории</Header>
                    <Card.Meta textAlign="right">{getCreateDateTimeText(entityData.entity?.createDateTime)}</Card.Meta>
                    <Card.Meta textAlign="right">
                        {getLastChangeDateTimeText(entityData.entity?.modifyDateTime)}
                    </Card.Meta>
                    <Dimmer active={entityData.isLoading} inverted>
                        <Loader>Загрузка</Loader>
                    </Dimmer>

                    <p>Наименование:</p>
                    <b>{entityData.entity?.name}</b>
                    <br />
                    <br />

                    <p>Удален:</p>
                    <b>{entityData.entity?.isDeleted ? 'Да' : 'Нет'}</b>

                    <Button.Group floated="right">
                        <Button>Редактировать</Button>
                        <Button>Удалить</Button>
                    </Button.Group>
                </Card.Content>
            </Card>
        </ProductsMenuLayout>
    )
}

export default ProductCategoryView
