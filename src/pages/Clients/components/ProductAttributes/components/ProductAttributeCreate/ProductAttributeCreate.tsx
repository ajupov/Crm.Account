import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductAttributeContextProvider from '../../contexts/ProductAttributeContext/ProductAttributeContextProvider'
import ProductAttributeCreateForm from './ProductAttributeCreateForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductAttributeContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductAttributeCreateForm />
            </Page>
        </ProductAttributeContextProvider>
    )
}

export default ProductAttributeCreate
