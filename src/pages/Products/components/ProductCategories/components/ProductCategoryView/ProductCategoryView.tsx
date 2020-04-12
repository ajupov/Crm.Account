import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductCategoryContextProvider from '../../contexts/ProductCategoryContext/ProductCategoryContextProvider'
import ProductCategoryViewForm from './ProductCategoryViewForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'

const ProductCategoryView: FC = () => {
    const title = 'Просмотр категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductCategoryViewForm />
            </Page>
        </ProductCategoryContextProvider>
    )
}

export default ProductCategoryView
