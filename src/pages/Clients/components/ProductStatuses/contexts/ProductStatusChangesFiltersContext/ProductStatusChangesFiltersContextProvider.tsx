import React, { FC } from 'react'

import ProductStatusChangesFiltersContext from './ProductStatusChangesFiltersContext'
import useProductStatusChangesFilters from './hooks/useProductStatusChangesFilters'

const ProductStatusChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useProductStatusChangesFilters()

    return (
        <ProductStatusChangesFiltersContext.Provider value={state}>
            {children}
        </ProductStatusChangesFiltersContext.Provider>
    )
}

export default ProductStatusChangesFiltersContextProvider
