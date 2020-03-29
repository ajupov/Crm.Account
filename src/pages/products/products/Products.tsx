import React, { FC, useEffect } from 'react'

import Page from '../../../components/page/Page'
import { setPageTitle } from '../../../utils/page/pageUtils'
import useProductsMenu from '../../../hooks/useProductsMenu'

const Products: FC = () => {
    const title = 'Продукты'

    const { menu } = useProductsMenu()

    useEffect(() => setPageTitle(title), [])

    return <Page title={title} menu={menu}></Page>
}

export default Products
