import React, { FC, useEffect } from 'react'

import Page from '../../../../components/Page/Page'
import ProductCategoriesActionsContextProvider from './contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContextProvider'
import ProductCategoriesContextProvider from './contexts/ProductCategoriesContext/ProductCategoriesContextProvider'
import ProductCategoriesFilter from './components/ProductCategoriesFilter/ProductCategoriesFilter'
import ProductCategoriesFiltersContextProvider from './contexts/ProductCategoriesFiltersContext/ProductCategoriesFiltersContextProvider'
import ProductCategoriesTable from './components/ProductCategoriesTable/ProductCategoriesTable'
import ProductCategoryContextProvider from './contexts/ProductCategoryContext/ProductCategoryContextProvider'
import ProductCategoryDelete from './components/ProductCategoryDelete/ProductCategoryDelete'
import ProductCategoryRestore from './components/ProductCategoryRestore/ProductCategoryRestore'
import ProductsCategoriesFilterMobile from './components/ProductsCategoriesFilterMobile/ProductsCategoriesFilterMobile'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../helpers/pageHelper'

const ProductCategories: FC = () => {
    const title = 'Категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesContextProvider>
            <ProductCategoriesActionsContextProvider>
                <ProductCategoriesFiltersContextProvider>
                    <ProductCategoryContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ProductsMenu />}
                            secondSidebar={<ProductCategoriesFilter />}
                            secondSidebarMobile={<ProductsCategoriesFilterMobile />}
                        >
                            <ProductCategoriesTable />
                            <ProductCategoryDelete />
                            <ProductCategoryRestore />
                        </Page>
                    </ProductCategoryContextProvider>
                </ProductCategoriesFiltersContextProvider>
            </ProductCategoriesActionsContextProvider>
        </ProductCategoriesContextProvider>
    )
}

export default ProductCategories
