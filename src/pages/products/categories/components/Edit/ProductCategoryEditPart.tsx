import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useContext } from 'react'

import Edit from '../../../../../components/Edit/Edit'
import ProductCategoryContext from '../../contexts/ProductCategoryContext'
import useProductCategoryEdit from './hooks/useProductCategoryEdit'

const ProductCategoryEditPart: FC = () => {
    const context = useContext(ProductCategoryContext)
    const { name, onChangeName, isDeleted, onChangeIsDeleted, onClickCancel, onClickConfirm } = useProductCategoryEdit()

    return (
        <Edit
            isLoading={context.isLoading}
            createDate={context.category.createDateTime}
            lastModifyDateTime={context.category.modifyDateTime}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        >
            <Form.Field required>
                <label>Наименование</label>
                <Input type="text" placeholder="Наименование" value={name} onChange={onChangeName} />
            </Form.Field>

            <Form.Field>
                <Checkbox label="Удален" checked={isDeleted} onChange={onChangeIsDeleted} />
            </Form.Field>
        </Edit>
    )
}

export default ProductCategoryEditPart
