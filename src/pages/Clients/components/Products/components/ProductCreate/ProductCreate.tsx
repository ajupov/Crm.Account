import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductContextProvider from '../../contexts/ProductContext/ProductContextProvider'
import ProductCreateForm from './ProductCreateForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductCreate: FC = () => {
    const title = 'Добавление продукта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductCreateForm />
            </Page>
        </ProductContextProvider>
    )
}

export default ProductCreate
