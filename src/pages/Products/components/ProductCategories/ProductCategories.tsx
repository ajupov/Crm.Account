import React, { FC, useEffect } from 'react'

import Page from '../../../../components/Page/Page'
import ProductCategoriesActionsContextProvider from './contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContextProvider'
import ProductCategoriesContextProvider from './contexts/ProductCategoriesContext/ProductCategoriesContextProvider'
import ProductCategoriesFilter from './components/ProductCategoriesFilter/ProductCategoriesFilter'
import ProductCategoriesTable from './components/ProductCategoriesTable/ProductCategoriesTable'
import ProductCategoryContextProvider from './contexts/ProductCategoryContext/ProductCategoryContextProvider'
import ProductCategoryDelete from './components/ProductCategoryDelete/ProductCategoryDelete'
import ProductCategoryRestore from './components/ProductCategoryRestore/ProductCategoryRestore'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../helpers/pageHelper'

const ProductCategories: FC = () => {
    const title = 'Категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesActionsContextProvider>
            <ProductCategoriesContextProvider>
                <ProductCategoryContextProvider>
                    <Page title={title} firstSidebar={<ProductsMenu />} secondSidebar={<ProductCategoriesFilter />}>
                        <ProductCategoriesTable />
                        <ProductCategoryDelete />
                        <ProductCategoryRestore />
                    </Page>
                </ProductCategoryContextProvider>
            </ProductCategoriesContextProvider>
        </ProductCategoriesActionsContextProvider>
    )
}

export default ProductCategories
