import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useContext, useEffect } from 'react'

import Edit from '../../../../../../components/Edit/Edit'
import Page from '../../../../../../components/Page/Page'
import ProductCategoryContext from '../../contexts/ProductCategoryContext'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'
import useProductCategory from '../../hooks/useProductCategory'
import useProductCategoryEdit from './hooks/useProductCategoryEdit'

const ProductCategoryEdit: FC = () => {
    const title = 'Изменение категории'

    const category = useProductCategory()
    const state = useContext(ProductCategoryContext)
    const { onChangeName, onChangeIsDeleted, onClickCancel, onClickConfirm } = useProductCategoryEdit()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContext.Provider value={category}>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <Edit
                    isLoading={state.isLoading}
                    createDate={state.category.createDateTime}
                    lastModifyDateTime={state.category.modifyDateTime}
                    onClickConfirm={onClickConfirm}
                    onClickCancel={onClickCancel}
                >
                    <Form.Field required>
                        <label>Наименование</label>
                        <Input type="text" placeholder="Наименование" value={name} onChange={onChangeName} />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label="Удален" checked={state.category.isDeleted} onChange={onChangeIsDeleted} />
                    </Form.Field>
                </Edit>
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryEdit
