import React, { FC, useEffect } from 'react'

import Page from '../../components/Page/Page'
import ProductsMenu from './components/ProductsMenu/ProductsMenu'
import { setPageTitle } from '../../helpers/pageHelper'

const Products: FC = () => {
    const title = 'Продукты'

    useEffect(() => setPageTitle(title), [])

    return <Page title={title} firstSidebar={<ProductsMenu />}></Page>
}

export default Products
