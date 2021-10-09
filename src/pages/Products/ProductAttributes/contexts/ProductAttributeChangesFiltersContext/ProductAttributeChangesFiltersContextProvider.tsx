import React, { FC } from 'react'

import ProductAttributeChangesFiltersContext from './ProductAttributeChangesFiltersContext'
import useProductAttributeChangesFilters from './hooks/useProductAttributeChangesFilters'

const ProductAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useProductAttributeChangesFilters()

    return (
        <ProductAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </ProductAttributeChangesFiltersContext.Provider>
    )
}

export default ProductAttributeChangesFiltersContextProvider
