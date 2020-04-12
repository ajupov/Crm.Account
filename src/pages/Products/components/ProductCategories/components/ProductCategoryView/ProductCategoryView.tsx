import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductCategoriesContextProvider from '../../contexts/ProductCategoriesContext/ProductCategoriesContextProvider'
import ProductCategoryContextProvider from '../../contexts/ProductCategoryContext/ProductCategoryContextProvider'
import ProductCategoryDelete from '../ProductCategoryDelete/ProductCategoryDelete'
import ProductCategoryRestore from '../ProductCategoryRestore/ProductCategoryRestore'
import ProductCategoryViewForm from './ProductCategoryViewForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'

const ProductCategoryView: FC = () => {
    const title = 'Просмотр категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesContextProvider>
            <ProductCategoryContextProvider>
                <Page title={title} firstSidebar={<ProductsMenu />}>
                    <ProductCategoryViewForm />
                    <ProductCategoryDelete />
                    <ProductCategoryRestore />
                </Page>
            </ProductCategoryContextProvider>
        </ProductCategoriesContextProvider>
    )
}

export default ProductCategoryView
