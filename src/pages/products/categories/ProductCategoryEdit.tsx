import React, { FC } from 'react'

import Page from '../../../components/page/Page'
import ProductCategoryContext from './contexts/ProductCategoryContext'
import ProductCategoryEditPart from './components/ProductCategoryEditPart'
import { useParams } from 'react-router-dom'
import useProductCategory from './hooks/useProductCategory'
import useProductsMenu from '../hooks/useProductsMenu'

const ProductCategoryEdit: FC = () => {
    const title = 'Изменение категории'

    const { id } = useParams()
    const state = useProductCategory(id)
    const { menu } = useProductsMenu()

    return (
        <ProductCategoryContext.Provider value={state}>
            <Page title={title} menu={menu}>
                {id && state.category && <ProductCategoryEditPart />}
            </Page>
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryEdit
