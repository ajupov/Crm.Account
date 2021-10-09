import React, { FC } from 'react'

import ProductCategoryContext from './ProductCategoryContext'
import useProductCategory from './hooks/useProductCategory'

const ProductCategoryContextProvider: FC = ({ children }) => {
    const state = useProductCategory()

    return <ProductCategoryContext.Provider value={state}>{children}</ProductCategoryContext.Provider>
}

export default ProductCategoryContextProvider
