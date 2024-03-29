import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import ProductStatusContextProvider from '../../contexts/ProductStatusContext/ProductStatusContextProvider'
import ProductStatusCreateForm from './ProductStatusCreateForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductStatusCreate: FC = () => {
    const title = 'Добавление статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductStatusContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductStatusCreateForm />
            </Page>
        </ProductStatusContextProvider>
    )
}

export default ProductStatusCreate
