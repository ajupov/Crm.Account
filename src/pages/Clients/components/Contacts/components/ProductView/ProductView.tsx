import React, { FC, useEffect } from 'react'

import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import ProductContextProvider from '../../contexts/ProductContext/ProductContextProvider'
import ProductDelete from '../ProductDelete/ProductDelete'
import ProductRestore from '../ProductRestore/ProductRestore'
import ProductViewForm from './ProductViewForm'
import ProductsActionsContextProvider from '../../contexts/ProductsActionsContext/ProductsActionsContextProvider'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductView: FC = () => {
    const title = 'Просмотр продукта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductsActionsContextProvider>
            <ProductContextProvider>
                <Page title={title} firstSidebar={<ContactsMenu />}>
                    <ProductViewForm />
                    <ProductDelete />
                    <ProductRestore />
                </Page>
            </ProductContextProvider>
        </ProductsActionsContextProvider>
    )
}

export default ProductView
