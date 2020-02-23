import { Card, Item } from 'semantic-ui-react'
import React, { FC } from 'react'

import { useParams } from 'react-router-dom'
import useProductCategory from './hooks/useProductCategory'

const ProductCategoryView: FC = () => {
    const { id } = useParams()

    const category = useProductCategory(id ?? '')

    return (
        <Card>
            <Card.Content>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header>{category?.name}</Item.Header>
                            <Item.Description>{category?.createDateTime}</Item.Description>
                            <Item.Extra>Additional Details</Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Card.Content>
        </Card>
    )
}

export default ProductCategoryView
