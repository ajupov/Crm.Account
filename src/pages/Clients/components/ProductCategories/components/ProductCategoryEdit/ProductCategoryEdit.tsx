import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductCategoryContextProvider from '../../contexts/ProductCategoryContext/ProductCategoryContextProvider'
import ProductCategoryEditForm from './ProductCategoryEditForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductCategoryEdit: FC = () => {
    const title = 'Изменение категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductCategoryEditForm />
            </Page>
        </ProductCategoryContextProvider>
    )
}

export default ProductCategoryEdit
