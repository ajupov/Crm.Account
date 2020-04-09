import React, { FC, useEffect } from 'react'

import Page from '../../../components/Page/Page'
import ProductCategoryContext from './contexts/ProductCategoryContext'
import ProductCategoryCreatePart from './components/ProductCategoryCreatePart'
import { setPageTitle } from '../../../helpers/pageHelper'
import useProductCategory from './hooks/useProductCategory'
import useProductsMenu from '../hooks/useProductsMenu'

const ProductCategoryCreate: FC = () => {
    const title = 'Добавление категории'

    const context = useProductCategory()
    const menu = useProductsMenu()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContext.Provider value={context}>
            <Page title={title} menu={menu}>
                <ProductCategoryCreatePart />
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryCreate
