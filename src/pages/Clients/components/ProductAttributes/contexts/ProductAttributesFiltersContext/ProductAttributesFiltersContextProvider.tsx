import React, { FC } from 'react'

import ProductAttributesFiltersContext from './ProductAttributesFiltersContext'
import useProductAttributesFilters from './hooks/useProductAttributesFilters'

const ProductAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useProductAttributesFilters()

    return <ProductAttributesFiltersContext.Provider value={state}>{children}</ProductAttributesFiltersContext.Provider>
}

export default ProductAttributesFiltersContextProvider
