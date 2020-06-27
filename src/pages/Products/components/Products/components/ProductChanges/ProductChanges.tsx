import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductChangesContextProvider from '../../contexts/ProductChangesContext/ProductChangesContextProvider'
import ProductChangesFilter from './components/ProductChangesFilter/ProductChangesFilter'
import ProductChangesFilterMobile from './components/ProductChangesFilterMobile/ProductChangesFilterMobile'
import ProductChangesFiltersContextProvider from '../../contexts/ProductChangesFiltersContext/ProductChangesFiltersContextProvider'
import ProductChangesTable from './components/ProductChangesTable/ProductChangesTable'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useProductChangesView from './hooks/useProductChangesView'

const ProductChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useProductChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductChangesContextProvider>
            <ProductChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ProductsMenu />}
                    secondSidebar={<ProductChangesFilter />}
                    secondSidebarMobile={<ProductChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <ProductChangesTable />
                </Page>
            </ProductChangesFiltersContextProvider>
        </ProductChangesContextProvider>
    )
}

export default ProductChanges
