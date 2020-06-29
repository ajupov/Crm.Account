import React, { FC } from 'react'

import ProductsFiltersContext from './ProductsFiltersContext'
import useProductsFilters from './hooks/useProductsFilters'

const ProductsFiltersContextProvider: FC = ({ children }) => {
    const state = useProductsFilters()

    return <ProductsFiltersContext.Provider value={state}>{children}</ProductsFiltersContext.Provider>
}

export default ProductsFiltersContextProvider
