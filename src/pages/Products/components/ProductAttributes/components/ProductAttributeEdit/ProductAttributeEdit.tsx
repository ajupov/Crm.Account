import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductAttributeContextProvider from '../../contexts/ProductAttributeContext/ProductAttributeContextProvider'
import ProductAttributeEditForm from './ProductAttributeEditForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

const ProductAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductAttributeContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductAttributeEditForm />
            </Page>
        </ProductAttributeContextProvider>
    )
}

export default ProductAttributeEdit
