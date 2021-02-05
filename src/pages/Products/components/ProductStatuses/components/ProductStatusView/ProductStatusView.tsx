import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductStatusContextProvider from '../../contexts/ProductStatusContext/ProductStatusContextProvider'
import ProductStatusDelete from '../ProductStatusDelete/ProductStatusDelete'
import ProductStatusRestore from '../ProductStatusRestore/ProductStatusRestore'
import ProductStatusViewForm from './ProductStatusViewForm'
import ProductStatusesActionsContextProvider from '../../contexts/ProductStatusesActionsContext/ProductStatusesActionsContextProvider'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductStatusView: FC = () => {
    const title = 'Просмотр статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductStatusesActionsContextProvider>
            <ProductStatusContextProvider>
                <Page title={title} firstSidebar={<ProductsMenu />}>
                    <ProductStatusViewForm />
                    <ProductStatusDelete />
                    <ProductStatusRestore />
                </Page>
            </ProductStatusContextProvider>
        </ProductStatusesActionsContextProvider>
    )
}

export default ProductStatusView
