import React, { FC } from 'react'

import ProductChangesFiltersContext from './ProductChangesFiltersContext'
import useProductChangesFilters from './hooks/useProductChangesFilters'

const ProductChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useProductChangesFilters()

    return (
        <ProductChangesFiltersContext.Provider value={state}>
            {children}
        </ProductChangesFiltersContext.Provider>
    )
}

export default ProductChangesFiltersContextProvider
