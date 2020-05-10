import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductAttributeContextProvider from '../../contexts/ProductAttributeContext/ProductAttributeContextProvider'
import ProductAttributeCreateForm from './ProductAttributeCreateForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'

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