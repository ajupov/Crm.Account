import React, { FC, useEffect } from 'react'

import Page from '../../../../components/common/grids/Page/Page'
import ProductStatusContextProvider from './contexts/ProductStatusContext/ProductStatusContextProvider'
import ProductStatusDelete from './components/ProductStatusDelete/ProductStatusDelete'
import ProductStatusRestore from './components/ProductStatusRestore/ProductStatusRestore'
import ProductStatusesActionsContextProvider from './contexts/ProductStatusesActionsContext/ProductStatusesActionsContextProvider'
import ProductStatusesContextProvider from './contexts/ProductStatusesContext/ProductStatusesContextProvider'
import ProductStatusesFilter from './components/ProductStatusesFilter/ProductStatusesFilter'
import ProductStatusesFiltersContextProvider from './contexts/ProductStatusesFiltersContext/ProductStatusesFiltersContextProvider'
import ProductStatusesTable from './components/ProductStatusesTable/ProductStatusesTable'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import ProductsStatusesFilterMobile from './components/ProductsStatusesFilterMobile/ProductsStatusesFilterMobile'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductStatuses: FC = () => {
    const title = 'Статусы'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductStatusesContextProvider>
            <ProductStatusesActionsContextProvider>
                <ProductStatusesFiltersContextProvider>
                    <ProductStatusContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ProductsMenu />}
                            secondSidebar={<ProductStatusesFilter />}
                            secondSidebarMobile={<ProductsStatusesFilterMobile />}
                        >
                            <ProductStatusesTable />
                            <ProductStatusDelete />
                            <ProductStatusRestore />
                        </Page>
                    </ProductStatusContextProvider>
                </ProductStatusesFiltersContextProvider>
            </ProductStatusesActionsContextProvider>
        </ProductStatusesContextProvider>
    )
}

export default ProductStatuses
