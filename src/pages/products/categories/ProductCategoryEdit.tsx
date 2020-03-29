import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC } from 'react'

import Edit from '../../../components/edit/Edit'
import Page from '../../../components/page/Page'
import useEditActions from './hooks/actions/useEditActions'
import { useParams } from 'react-router-dom'
import useProductCategory from './hooks/useProductCategory'
import useProductsMenu from '../hooks/useProductsMenu'
import useViewActions from './hooks/actions/useViewActions'

const ProductCategoryEdit: FC = () => {
    const title = 'Изменение категории'

    const { id } = useParams()
    const { menu } = useProductsMenu()
    const { onClickBack } = useViewActions()
    const { onClickConfirm, onClickCancel } = useEditActions()
    const { isLoading, category } = useProductCategory(id)

    return (
        <Page title={title} menu={menu}>
            {id && category && (
                <Edit
                    isLoading={isLoading}
                    createDate={category.createDateTime}
                    lastModifyDateTime={category.modifyDateTime}
                    onClickBack={onClickBack}
                    onClickConfirm={onClickConfirm}
                    onClickCancel={onClickCancel}
                >
                    <Form>
                        <Form.Field required>
                            <label>Наименование</label>
                            <Input placeholder="Наименование" value={category?.name} />
                        </Form.Field>

                        <Form.Field>
                            <Checkbox label="Удален" checked={category?.isDeleted} />
                        </Form.Field>
                    </Form>
                </Edit>
            )}
        </Page>
    )
}

export default ProductCategoryEdit
