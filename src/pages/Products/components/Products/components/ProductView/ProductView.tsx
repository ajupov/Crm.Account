import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/common/grids/Page/Page'
import ProductContextProvider from '../../contexts/ProductContext/ProductContextProvider'
import ProductDelete from '../ProductDelete/ProductDelete'
import ProductRestore from '../ProductRestore/ProductRestore'
import ProductViewForm from './ProductViewForm'
import ProductsActionsContextProvider from '../../contexts/ProductsActionsContext/ProductsActionsContextProvider'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

const ProductView: FC = () => {
    const title = 'Просмотр продукта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductsActionsContextProvider>
            <ProductContextProvider>
                <Page title={title} firstSidebar={<ProductsMenu />}>
                    <ProductViewForm />
                    <ProductDelete />
                    <ProductRestore />
                </Page>
            </ProductContextProvider>
        </ProductsActionsContextProvider>
    )
}

export default ProductView
