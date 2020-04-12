import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC, useEffect } from 'react'

import Create from '../../../../../components/Create/Create'
import Page from '../../../../../components/Page/Page'
import ProductCategoryContext from '../../contexts/ProductCategoryContext'
import { setPageTitle } from '../../../../../helpers/pageHelper'
import useProductCategory from '../../hooks/useProductCategory'
import useProductCategoryCreate from './hooks/useProductCategoryCreate'
import useProductsMenu from '../../../hooks/useProductsMenu'

const ProductCategoryCreate: FC = () => {
    const title = 'Добавление категории'

    const state = useProductCategory()
    const menu = useProductsMenu()
    const {
        name,
        onChangeName,
        isDeleted,
        onChangeIsDeleted,
        onClickConfirm,
        onClickCancel
    } = useProductCategoryCreate()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContext.Provider value={state}>
            <Page title={title} menu={menu}>
                <Create onClickConfirm={onClickConfirm} onClickCancel={onClickCancel}>
                    <Form.Field required>
                        <label>Наименование</label>
                        <Input type="text" placeholder="Наименование" value={name} onChange={onChangeName} />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label="Удален" checked={isDeleted} onChange={onChangeIsDeleted} />
                    </Form.Field>
                </Create>
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryCreate
