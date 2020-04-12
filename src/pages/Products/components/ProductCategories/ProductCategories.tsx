import React, { FC, useEffect } from 'react'

import Page from '../../../../components/Page/Page'
import ProductCategoriesContext from './contexts/ProductCategoriesContext'
import ProductCategoriesFilter from './components/ProductCategoriesFilter/ProductCategoriesFilter'
import ProductCategoriesTable from './components/ProductCategoriesTable/ProductCategoriesTable'
import ProductCategoryDelete from './components/ProductCategoryDelete/ProductCategoryDelete'
import ProductCategoryRestore from './components/ProductCategoryRestore/ProductCategoryRestore'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../helpers/pageHelper'
import useProductCategories from './hooks/useProductCategories'

const ProductCategories: FC = () => {
    const title = 'Категории'

    const state = useProductCategories()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesContext.Provider value={state}>
            <Page title={title} firstSidebar={<ProductsMenu />} secondSidebar={<ProductCategoriesFilter />}>
                <ProductCategoriesTable />
            </Page>
            <ProductCategoryDelete />
            <ProductCategoryRestore />
        </ProductCategoriesContext.Provider>
    )
}

export default ProductCategories
