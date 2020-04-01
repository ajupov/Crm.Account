import React, { FC, useEffect } from 'react'

import Page from '../../../components/page/Page'
import ProductCategoriesContext from './contexts/ProductCategoriesContext'
import ProductCategoriesFilter from './filters/ProductCategoriesFilter'
import ProductCategoriesTable from './ProductCategoriesTable'
import ProductCategoryDelete from './modals/ProductCategoryDelete'
import ProductCategoryRestore from './modals/ProductCategoryRestore'
import { setPageTitle } from '../../../helpers/pageHelper'
import useProductCategories from './hooks/useProductCategories'
import useProductsMenu from '../hooks/useProductsMenu'

const ProductCategories: FC = () => {
    const title = 'Категории'

    const { menu } = useProductsMenu()

    const productCategories = useProductCategories()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesContext.Provider value={productCategories}>
            <Page title={title} menu={menu} secondMenu={<ProductCategoriesFilter />}>
                <ProductCategoriesTable />
            </Page>

            <ProductCategoryDelete />

            <ProductCategoryRestore />
        </ProductCategoriesContext.Provider>
    )
}

export default ProductCategories
