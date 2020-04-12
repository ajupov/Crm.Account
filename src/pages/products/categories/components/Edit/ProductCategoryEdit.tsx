import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useContext, useEffect } from 'react'

import Edit from '../../../../../components/Edit/Edit'
import Page from '../../../../../components/Page/Page'
import ProductCategoryContext from '../../contexts/ProductCategoryContext'
import { setPageTitle } from '../../../../../helpers/pageHelper'
import useProductCategory from '../../hooks/useProductCategory'
import useProductCategoryEdit from './hooks/useProductCategoryEdit'
import useProductsMenu from '../../../hooks/useProductsMenu'

const ProductCategoryEdit: FC = () => {
    const title = 'Изменение категории'

    const state = useProductCategory()
    const menu = useProductsMenu()
    const context = useContext(ProductCategoryContext)
    const { name, onChangeName, isDeleted, onChangeIsDeleted, onClickCancel, onClickConfirm } = useProductCategoryEdit()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContext.Provider value={state}>
            <Page title={title} menu={menu}>
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
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryEdit
