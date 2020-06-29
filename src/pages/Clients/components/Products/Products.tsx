import React, { FC, useEffect } from 'react'

import Page from '../../../../components/common/grids/Page/Page'
import ProductContextProvider from './contexts/ProductContext/ProductContextProvider'
import ProductDelete from './components/ProductDelete/ProductDelete'
import ProductRestore from './components/ProductRestore/ProductRestore'
import ProductsActionsContextProvider from './contexts/ProductsActionsContext/ProductsActionsContextProvider'
import ProductsContextProvider from './contexts/ProductsContext/ProductsContextProvider'
import ProductsFilter from './components/ProductsFilter/ProductsFilter'
import ProductsFilterMobile from './components/ProductsFilterMobile/ProductsFilterMobile'
import ProductsFiltersContextProvider from './contexts/ProductsFiltersContext/ProductsFiltersContextProvider'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import ProductsTable from './components/ProductsTable/ProductsTable'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const Products: FC = () => {
    const title = 'Продукты'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductsContextProvider>
            <ProductsActionsContextProvider>
                <ProductsFiltersContextProvider>
                    <ProductContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ProductsMenu />}
                            secondSidebar={<ProductsFilter />}
                            secondSidebarMobile={<ProductsFilterMobile />}
                        >
                            <ProductsTable />
                            <ProductDelete />
                            <ProductRestore />
                        </Page>
                    </ProductContextProvider>
                </ProductsFiltersContextProvider>
            </ProductsActionsContextProvider>
        </ProductsContextProvider>
    )
}

export default Products
