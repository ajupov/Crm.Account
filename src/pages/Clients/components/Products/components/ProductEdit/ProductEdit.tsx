import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductContextProvider from '../../contexts/ProductContext/ProductContextProvider'
import ProductEditForm from './ProductEditForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductEdit: FC = () => {
    const title = 'Изменение продукта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductEditForm />
            </Page>
        </ProductContextProvider>
    )
}

export default ProductEdit
