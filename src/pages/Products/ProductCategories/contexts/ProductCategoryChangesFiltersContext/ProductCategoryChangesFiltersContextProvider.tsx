import React, { FC } from 'react'

import ProductCategoryChangesFiltersContext from './ProductCategoryChangesFiltersContext'
import useProductCategoryChangesFilters from './hooks/useProductCategoryChangesFilters'

const ProductCategoryChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useProductCategoryChangesFilters()

    return (
        <ProductCategoryChangesFiltersContext.Provider value={state}>
            {children}
        </ProductCategoryChangesFiltersContext.Provider>
    )
}

export default ProductCategoryChangesFiltersContextProvider
