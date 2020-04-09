import { Checkbox, Form, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, useCallback, useContext } from 'react'

import Edit from '../../../../components/Edit/Edit'
import ProductCategoryContext from '../contexts/ProductCategoryContext'
import useActions from '../hooks/useActions'
import useEditActions from '../hooks/useEditActions'

const ProductCategoryCreatePart: FC = () => {
    const state = useContext(ProductCategoryContext)
    const { onClickBack } = useActions()
    const { name, setName, onClickConfirm, onClickCancel } = useEditActions()

    const onChangeName = useCallback((_, data: InputOnChangeData) => setName(data.value), [setName])

    return (
        <Create onClickBack={onClickBack} onClickConfirm={onClickConfirm} onClickCancel={onClickCancel}>
            <Form>
                <Form.Field required>
                    <label>Наименование</label>
                    <Input placeholder="Наименование" />
                </Form.Field>
            </Form>
        </Create>
    )
}

export default ProductCategoryCreatePart
