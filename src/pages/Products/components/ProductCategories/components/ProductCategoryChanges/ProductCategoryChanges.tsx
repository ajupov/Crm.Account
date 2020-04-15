import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductCategoryChangesContextProvider from '../../contexts/ProductCategoryChangesContext/ProductCategoryChangesContextProvider'
import ProductCategoryChangesFilter from '../ProductCategoryChangesFilter/ProductCategoryChangesFilter'
import ProductCategoryChangesTable from '../ProductCategoryChangesTable/ProductCategoryChangesTable'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'

const ProductCategoryChanges: FC = () => {
    const title = 'История изменений'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryChangesContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />} secondSidebar={<ProductCategoryChangesFilter />}>
                <ProductCategoryChangesTable />
            </Page>
        </ProductCategoryChangesContextProvider>
    )
}

export default ProductCategoryChanges
