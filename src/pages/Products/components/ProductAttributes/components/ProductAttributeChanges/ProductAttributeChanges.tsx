import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductAttributeChangesContextProvider from '../../contexts/ProductAttributeChangesContext/ProductAttributeChangesContextProvider'
import ProductAttributeChangesFilter from './components/ProductAttributeChangesFilter/ProductAttributeChangesFilter'
import ProductAttributeChangesFiltersContextProvider from '../../contexts/ProductAttributeChangesFiltersContext/ProductAttributeChangesFiltersContextProvider'
import ProductAttributeChangesTable from './components/ProductAttributeChangesTable/ProductAttributeChangesTable'
import ProductsAttributeChangesFilterMobile from './components/ProductsAttributeChangesFilterMobile/ProductsAttributeChangesFilterMobile'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'
import useProductAttributeChangesView from './hooks/useProductAttributeChangesView'

const ProductAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useProductAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductAttributeChangesContextProvider>
            <ProductAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ProductsMenu />}
                    secondSidebar={<ProductAttributeChangesFilter />}
                    secondSidebarMobile={<ProductsAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <ProductAttributeChangesTable />
                </Page>
            </ProductAttributeChangesFiltersContextProvider>
        </ProductAttributeChangesContextProvider>
    )
}

export default ProductAttributeChanges
