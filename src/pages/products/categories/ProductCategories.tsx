import React, { FC, useEffect } from 'react'

import Page from '../../../components/Page/Page'
import ProductCategoriesContext from './contexts/ProductCategoriesContext'
import ProductCategoriesFilter from './Filter/ProductCategoriesFilter'
import ProductCategoriesTable from './Table/ProductCategoriesTable'
import ProductCategoryDelete from './Delete/ProductCategoryDelete'
import ProductCategoryRestore from './Restore/ProductCategoryRestore'
import { setPageTitle } from '../../../helpers/pageHelper'
import useProductCategories from './hooks/useProductCategories'
import useProductsMenu from '../hooks/useProductsMenu'

const ProductCategories: FC = () => {
    const title = 'Категории'

    const state = useProductCategories()
    const menu = useProductsMenu()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesContext.Provider value={state}>
            <Page title={title} menu={menu} secondMenu={<ProductCategoriesFilter />}>
                <ProductCategoriesTable />
                <ProductCategoryDelete />
                <ProductCategoryRestore />
            </Page>
        </ProductCategoriesContext.Provider>
    )
}

export default ProductCategories
