import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductCategoryContextProvider from '../../contexts/ProductCategoryContext/ProductCategoryContextProvider'
import ProductCategoryCreateForm from './ProductCategoryCreateForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'

const ProductCategoryCreate: FC = () => {
    const title = 'Добавление категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductCategoryCreateForm />
            </Page>
        </ProductCategoryContextProvider>
    )
}

export default ProductCategoryCreate