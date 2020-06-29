import React, { FC, useEffect } from 'react'

import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import ProductContextProvider from '../../contexts/ProductContext/ProductContextProvider'
import ProductEditForm from './ProductEditForm'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductEdit: FC = () => {
    const title = 'Изменение продукта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductContextProvider>
            <Page title={title} firstSidebar={<ContactsMenu />}>
                <ProductEditForm />
            </Page>
        </ProductContextProvider>
    )
}

export default ProductEdit
