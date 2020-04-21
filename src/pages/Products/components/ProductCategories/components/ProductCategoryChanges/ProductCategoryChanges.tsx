import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductCategoryChangesContextProvider from '../../contexts/ProductCategoryChangesContext/ProductCategoryChangesContextProvider'
import ProductCategoryChangesFilter from './components/ProductCategoryChangesFilter/ProductCategoryChangesFilter'
import ProductCategoryChangesTable from './components/ProductCategoryChangesTable/ProductCategoryChangesTable'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'
import useProductCategoryChangesView from './hooks/useProductCategoryChangesView'

const ProductCategoryChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useProductCategoryChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryChangesContextProvider>
            <Page
                onClickCancel={onClickCancel}
                title={title}
                firstSidebar={<ProductsMenu />}
                secondSidebar={<ProductCategoryChangesFilter />}
            >
                <ProductCategoryChangesTable />
            </Page>
        </ProductCategoryChangesContextProvider>
    )
}

export default ProductCategoryChanges
