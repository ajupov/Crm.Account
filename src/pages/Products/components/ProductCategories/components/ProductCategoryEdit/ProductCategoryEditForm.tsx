import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useContext } from 'react'

import Edit from '../../../../../../components/Edit/Edit'
import ProductCategoryContext from '../../contexts/ProductCategoryContext/ProductCategoryContext'
import useProductCategoryEdit from './hooks/useProductCategoryEdit'

const ProductCategoryEditForm: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { onChangeName, onChangeIsDeleted, onClickCancel, onClickConfirm } = useProductCategoryEdit()

    return (
        <Edit
            isLoading={state.isLoading}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        >
            <Form.Field required>
                <label>Наименование</label>
                <Input type="text" placeholder="Наименование" value={state.category.name} onChange={onChangeName} />
            </Form.Field>
            <Form.Field>
                <Checkbox label="Удален" checked={state.category.isDeleted} onChange={onChangeIsDeleted} />
            </Form.Field>
        </Edit>
    )
}

export default ProductCategoryEditForm
