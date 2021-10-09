import React, { FC } from 'react'

import ProductStatusesFiltersContext from './ProductStatusesFiltersContext'
import useProductStatusesFilters from './hooks/useProductStatusesFilters'

const ProductStatusesFiltersContextProvider: FC = ({ children }) => {
    const state = useProductStatusesFilters()

    return <ProductStatusesFiltersContext.Provider value={state}>{children}</ProductStatusesFiltersContext.Provider>
}

export default ProductStatusesFiltersContextProvider
