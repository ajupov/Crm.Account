import { Checkbox, Form, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, useCallback, useContext } from 'react'

import Edit from '../../../../components/edit/Edit'
import ProductCategoryContext from '../contexts/ProductCategoryContext'
import useActions from '../hooks/useActions'
import useEditActions from '../hooks/useEditActions'

const ProductCategoryEditPart: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { onClickBack } = useActions()
    const { name, setName, onClickConfirm, onClickCancel } = useEditActions()

    const onChangeName = useCallback((_, data: InputOnChangeData) => setName(data.value), [setName])

    return (
        <Edit
            isLoading={state.isLoading}
            createDate={state.category.createDateTime}
            lastModifyDateTime={state.category.modifyDateTime}
            onClickBack={onClickBack}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        >
            <Form>
                <Form.Field required>
                    <label>Наименование</label>
                    <Input placeholder="Наименование" value={name} onChange={onChangeName} />
                </Form.Field>

                <Form.Field>
                    <Checkbox label="Удален" checked={state.category.isDeleted} />
                </Form.Field>
            </Form>
        </Edit>
    )
}

export default ProductCategoryEditPart
