import React, { FC, useEffect } from 'react'

import Page from '../../../../../../components/Page/Page'
import ProductContextProvider from '../../contexts/ProductContext/ProductContextProvider'
import ProductEditForm from './ProductEditForm'
import ProductsMenu from '../../../ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../../../../../helpers/pageHelper'

const ProductEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductContextProvider>
            <Page title={title} firstSidebar={<ProductsMenu />}>
                <ProductEditForm />
            </Page>
        </ProductContextProvider>
    )
}

export default ProductEdit