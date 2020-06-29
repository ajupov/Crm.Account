import React, { FC } from 'react'

import ProductCategoriesFiltersContext from './ProductCategoriesFiltersContext'
import useProductCategoriesFilters from './hooks/useProductCategoriesFilters'

const ProductCategoriesFiltersContextProvider: FC = ({ children }) => {
    const state = useProductCategoriesFilters()

    return <ProductCategoriesFiltersContext.Provider value={state}>{children}</ProductCategoriesFiltersContext.Provider>
}

export default ProductCategoriesFiltersContextProvider
