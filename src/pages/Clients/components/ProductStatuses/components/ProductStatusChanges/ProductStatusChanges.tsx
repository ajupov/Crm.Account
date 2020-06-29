import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductStatusChangesContextProvider from '../../contexts/ProductStatusChangesContext/ProductStatusChangesContextProvider'
import ProductStatusChangesFilter from './components/ProductStatusChangesFilter/ProductStatusChangesFilter'
import ProductStatusChangesFiltersContextProvider from '../../contexts/ProductStatusChangesFiltersContext/ProductStatusChangesFiltersContextProvider'
import ProductStatusChangesTable from './components/ProductStatusChangesTable/ProductStatusChangesTable'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import ProductsStatusChangesFilterMobile from './components/ProductsStatusChangesFilterMobile/ProductsStatusChangesFilterMobile'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useProductStatusChangesView from './hooks/useProductStatusChangesView'

// TODO: Move to l10n
const ProductStatusChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useProductStatusChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductStatusChangesContextProvider>
            <ProductStatusChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ProductsMenu />}
                    secondSidebar={<ProductStatusChangesFilter />}
                    secondSidebarMobile={<ProductsStatusChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <ProductStatusChangesTable />
                </Page>
            </ProductStatusChangesFiltersContextProvider>
        </ProductStatusChangesContextProvider>
    )
}

export default ProductStatusChanges
