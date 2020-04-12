import React, { FC, useEffect } from 'react'

import Page from '../../../../components/Page/Page'
import ProductCategoriesContextProvider from './contexts/ProductCategoriesContext/ProductCategoriesContextProvider'
import ProductCategoriesFilter from './components/ProductCategoriesFilter/ProductCategoriesFilter'
import ProductCategoriesTable from './components/ProductCategoriesTable/ProductCategoriesTable'
import ProductCategoryDelete from './components/ProductCategoryDelete/ProductCategoryDelete'
import ProductCategoryRestore from './components/ProductCategoryRestore/ProductCategoryRestore'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../helpers/pageHelper'

const ProductCategories: FC = () => {
    const title = 'Категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />} secondSidebar={<ProductCategoriesFilter />}>
                <ProductCategoriesTable />
            </Page>
            <ProductCategoryDelete />
            <ProductCategoryRestore />
        </ProductCategoriesContextProvider>
    )
}

export default ProductCategories
