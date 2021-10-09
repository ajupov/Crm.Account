import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import ProductStatusContextProvider from '../../contexts/ProductStatusContext/ProductStatusContextProvider'
import ProductStatusEditForm from './ProductStatusEditForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductStatusEdit: FC = () => {
    const title = 'Изменение статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductStatusContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductStatusEditForm />
            </Page>
        </ProductStatusContextProvider>
    )
}

export default ProductStatusEdit
