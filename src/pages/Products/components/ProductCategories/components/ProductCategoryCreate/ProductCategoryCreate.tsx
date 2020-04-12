import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useContext, useEffect } from 'react'

import Create from '../../../../../../components/Create/Create'
import Page from '../../../../../../components/Page/Page'
import ProductCategoryContext from '../../contexts/ProductCategoryContext'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'
import useProductCategory from '../../hooks/useProductCategory'
import useProductCategoryCreate from './hooks/useProductCategoryCreate'

const ProductCategoryCreate: FC = () => {
    const title = 'Добавление категории'

    const category = useProductCategory()
    const state = useContext(ProductCategoryContext)
    const { onChangeName, onChangeIsDeleted, onClickConfirm, onClickCancel } = useProductCategoryCreate()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContext.Provider value={category}>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <Create onClickConfirm={onClickConfirm} onClickCancel={onClickCancel}>
                    <Form.Field required>
                        <label>Наименование</label>
                        <Input
                            type="text"
                            placeholder="Наименование"
                            value={state.category.name}
                            onChange={onChangeName}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label="Удален" checked={state.category.isDeleted} onChange={onChangeIsDeleted} />
                    </Form.Field>
                </Create>
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryCreate
