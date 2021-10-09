import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import ProductCategoriesActionsContextProvider from '../../contexts/ProductCategoriesActionsContext/ProductCategoriesActionsContextProvider'
import ProductCategoryContextProvider from '../../contexts/ProductCategoryContext/ProductCategoryContextProvider'
import ProductCategoryDelete from '../ProductCategoryDelete/ProductCategoryDelete'
import ProductCategoryRestore from '../ProductCategoryRestore/ProductCategoryRestore'
import ProductCategoryViewForm from './ProductCategoryViewForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductCategoryView: FC = () => {
    const title = 'Просмотр категории'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoriesActionsContextProvider>
            <ProductCategoryContextProvider>
                <Page title={title} firstSidebar={<ProductsMenu />}>
                    <ProductCategoryViewForm />
                    <ProductCategoryDelete />
                    <ProductCategoryRestore />
                </Page>
            </ProductCategoryContextProvider>
        </ProductCategoriesActionsContextProvider>
    )
}

export default ProductCategoryView
