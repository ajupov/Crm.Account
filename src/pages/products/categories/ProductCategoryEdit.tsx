import React, { FC, useEffect } from 'react'

import Page from '../../../components/Page/Page'
import ProductCategoryContext from './contexts/ProductCategoryContext'
import ProductCategoryEditPart from './components/ProductCategoryEditPart'
import { setPageTitle } from '../../../helpers/pageHelper'
import { useParams } from 'react-router-dom'
import useProductCategory from './hooks/useProductCategory'
import useProductsMenu from '../hooks/useProductsMenu'

const ProductCategoryEdit: FC = () => {
    const title = 'Изменение категории'

    const { id } = useParams()
    const context = useProductCategory(id)
    const menu = useProductsMenu()

    useEffect(() => setPageTitle(title), [])

    return (
        <ProductCategoryContext.Provider value={context}>
            <Page title={title} menu={menu}>
                <ProductCategoryEditPart />
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryEdit
