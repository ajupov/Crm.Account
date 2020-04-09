import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useContext } from 'react'

import Edit from '../../../../components/Edit/Edit'
import ProductCategoryContext from '../contexts/ProductCategoryContext'
import useActions from '../hooks/useActions'
import useEditActions from '../hooks/useEditActions'

const ProductCategoryEditPart: FC = () => {
    const category = useContext(ProductCategoryContext)
    const { onClickBack } = useActions()
    const { name, onChangeName, isDeleted, onChangeIsDeleted, onClickConfirm, onClickCancel } = useEditActions()

    return (
        <Edit
            isLoading={category.isLoading}
            createDate={category.category.createDateTime}
            lastModifyDateTime={category.category.modifyDateTime}
            onClickBack={onClickBack}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        >
            <Form>
                <Form.Field required>
                    <label>Наименование</label>
                    <Input type="text" placeholder="Наименование" value={name} onChange={onChangeName} />
                </Form.Field>

                <Form.Field>
                    <Checkbox label="Удален" checked={isDeleted} onChange={onChangeIsDeleted} />
                </Form.Field>

                <Form.Field>
                    <Button.Group floated="right">
                        <Button type="reset" basic onClick={onClickCancel}>
                            Отмена
                        </Button>
                        <Button type="submit">Сохранить</Button>
                    </Button.Group>
                </Form.Field>
            </Form>
        </Edit>
    )
}

export default ProductCategoryEditPart
