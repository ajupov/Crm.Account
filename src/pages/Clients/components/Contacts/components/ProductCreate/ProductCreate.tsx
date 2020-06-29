import React, { FC, useEffect } from 'react'

import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import ProductContextProvider from '../../contexts/ProductContext/ProductContextProvider'
import ProductCreateForm from './ProductCreateForm'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductCreate: FC = () => {
    const title = 'Добавление продукта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductContextProvider>
            <Page title={title} firstSidebar={<ContactsMenu />}>
                <ProductCreateForm />
            </Page>
        </ProductContextProvider>
    )
}

export default ProductCreate
