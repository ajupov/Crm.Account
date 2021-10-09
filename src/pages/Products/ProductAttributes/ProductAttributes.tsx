import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import ProductAttributeContextProvider from './contexts/ProductAttributeContext/ProductAttributeContextProvider'
import ProductAttributeDelete from './components/ProductAttributeDelete/ProductAttributeDelete'
import ProductAttributeRestore from './components/ProductAttributeRestore/ProductAttributeRestore'
import ProductAttributesActionsContextProvider from './contexts/ProductAttributesActionsContext/ProductAttributesActionsContextProvider'
import ProductAttributesContextProvider from './contexts/ProductAttributesContext/ProductAttributesContextProvider'
import ProductAttributesFilter from './components/ProductAttributesFilter/ProductAttributesFilter'
import ProductAttributesFilterMobile from './components/ProductAttributesFilterMobile/ProductAttributesFilterMobile'
import ProductAttributesFiltersContextProvider from './contexts/ProductAttributesFiltersContext/ProductAttributesFiltersContextProvider'
import ProductAttributesTable from './components/ProductAttributesTable/ProductAttributesTable'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductAttributes: FC = () => {
    const title = 'Аттрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductAttributesContextProvider>
            <ProductAttributesActionsContextProvider>
                <ProductAttributesFiltersContextProvider>
                    <ProductAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ProductsMenu />}
                            secondSidebar={<ProductAttributesFilter />}
                            secondSidebarMobile={<ProductAttributesFilterMobile />}
                        >
                            <ProductAttributesTable />
                            <ProductAttributeDelete />
                            <ProductAttributeRestore />
                        </Page>
                    </ProductAttributeContextProvider>
                </ProductAttributesFiltersContextProvider>
            </ProductAttributesActionsContextProvider>
        </ProductAttributesContextProvider>
    )
}

export default ProductAttributes
