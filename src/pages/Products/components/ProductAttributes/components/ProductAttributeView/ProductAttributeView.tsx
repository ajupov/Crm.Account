import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductAttributeContextProvider from '../../contexts/ProductAttributeContext/ProductAttributeContextProvider'
import ProductAttributeDelete from '../ProductAttributeDelete/ProductAttributeDelete'
import ProductAttributeRestore from '../ProductAttributeRestore/ProductAttributeRestore'
import ProductAttributeViewForm from './ProductAttributeViewForm'
import ProductAttributesActionsContextProvider from '../../contexts/ProductAttributesActionsContext/ProductAttributesActionsContextProvider'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'

const ProductAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductAttributesActionsContextProvider>
            <ProductAttributeContextProvider>
                <Page title={title} firstSidebar={<ProductsMenu />}>
                    <ProductAttributeViewForm />
                    <ProductAttributeDelete />
                    <ProductAttributeRestore />
                </Page>
            </ProductAttributeContextProvider>
        </ProductAttributesActionsContextProvider>
    )
}

export default ProductAttributeView
