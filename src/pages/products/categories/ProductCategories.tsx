import React, { FC, useEffect } from 'react'

import Page from '../../../components/Page/Page'
import ProductCategoriesContext from './contexts/ProductCategoriesContext'
import ProductCategoriesFilter from './components/ProductCategoriesFilter'
import ProductCategoriesTable from './components/ProductCategoriesTable'
import ProductCategoryDelete from './components/ProductCategoryDelete'
import ProductCategoryRestore from './components/ProductCategoryRestore'
import { setPageTitle } from '../../../helpers/pageHelper'
import useProductCategories from './hooks/useProductCategories'
import useProductsMenu from '../hooks/useProductsMenu'

const ProductCategories: FC = () => {
    const title = 'Категории'

    const context = useProductCategories()
    const menu = useProductsMenu()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesContext.Provider value={context}>
            <Page title={title} menu={menu} secondMenu={<ProductCategoriesFilter />}>
                <ProductCategoriesTable />
                <ProductCategoryDelete />
                <ProductCategoryRestore />
            </Page>
        </ProductCategoriesContext.Provider>
    )
}

export default ProductCategories
