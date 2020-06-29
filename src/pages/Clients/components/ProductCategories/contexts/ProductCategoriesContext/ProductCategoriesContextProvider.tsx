import React, { FC } from 'react'

import ProductCategoriesContext from './ProductCategoriesContext'
import useProductCategories from './hooks/useProductCategories'

const ProductCategoriesContextProvider: FC = ({ children }) => {
    const state = useProductCategories()

    return <ProductCategoriesContext.Provider value={state}>{children}</ProductCategoriesContext.Provider>
}

export default ProductCategoriesContextProvider
