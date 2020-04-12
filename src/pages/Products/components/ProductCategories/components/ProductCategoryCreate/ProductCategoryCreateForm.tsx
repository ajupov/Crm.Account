import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useContext } from 'react'

import Create from '../../../../../../components/Create/Create'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import useProductCategoryCreate from './hooks/useProductCategoryCreate'

const ProductCategoryCreateForm: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { onChangeName, onChangeIsDeleted, onClickConfirm, onClickCancel } = useProductCategoryCreate()

    return (
        <Create onClickConfirm={onClickConfirm} onClickCancel={onClickCancel}>
            <Form.Field required>
                <label>Наименование</label>
                <Input
                    type="text"
                    placeholder="Наименование"
                    value={state.category.name ?? ''}
                    onChange={onChangeName}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox label="Удален" checked={state.category.isDeleted} onChange={onChangeIsDeleted} />
            </Form.Field>
        </Create>
    )
}

export default ProductCategoryCreateForm
