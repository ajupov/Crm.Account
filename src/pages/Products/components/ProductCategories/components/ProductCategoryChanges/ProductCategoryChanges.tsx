import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductCategoryChangesContextProvider from '../../contexts/ProductCategoryChangesContext/ProductCategoryChangesContextProvider'
import ProductCategoryChangesFilter from './components/ProductCategoryChangesFilter/ProductCategoryChangesFilter'
import ProductCategoryChangesFiltersContextProvider from '../../contexts/ProductCategoryChangesFiltersContext/ProductCategoryChangesFiltersContextProvider'
import ProductCategoryChangesTable from './components/ProductCategoryChangesTable/ProductCategoryChangesTable'
import ProductsCategoryChangesFilterMobile from './components/ProductsCategoryChangesFilterMobile/ProductsCategoryChangesFilterMobile'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'
import useProductCategoryChangesView from './hooks/useProductCategoryChangesView'

const ProductCategoryChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useProductCategoryChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryChangesContextProvider>
            <ProductCategoryChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ProductsMenu />}
                    secondSidebar={<ProductCategoryChangesFilter />}
                    secondSidebarMobile={<ProductsCategoryChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <ProductCategoryChangesTable />
                </Page>
            </ProductCategoryChangesFiltersContextProvider>
        </ProductCategoryChangesContextProvider>
    )
}

export default ProductCategoryChanges
