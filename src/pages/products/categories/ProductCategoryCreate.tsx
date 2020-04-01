import { Form, Input } from 'semantic-ui-react'
import React, { FC } from 'react'

import Create from '../../../components/create/Create'
import Page from '../../../components/page/Page'
import useCreateActions from './hooks/useCreateActions'
import useProductsMenu from '../hooks/useProductsMenu'
import useViewActions from './hooks/useViewActions'

const ProductCategoryCreate: FC = () => {
    const title = 'Добавление категории'

    const { menu } = useProductsMenu()
    const { onClickBack } = useViewActions()
    const { onClickConfirm, onClickCancel } = useCreateActions()

    return (
        <Page title={title} menu={menu}>
            <Create onClickBack={onClickBack} onClickConfirm={onClickConfirm} onClickCancel={onClickCancel}>
                <Form>
                    <Form.Field required>
                        <label>Наименование</label>
                        <Input placeholder="Наименование" />
                    </Form.Field>
                </Form>
            </Create>
        </Page>
    )
}

export default ProductCategoryCreate
