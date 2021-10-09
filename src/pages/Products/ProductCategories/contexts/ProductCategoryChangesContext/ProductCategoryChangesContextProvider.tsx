import React, { FC } from 'react'

import ProductCategoryChangesContext from './ProductCategoryChangesContext'
import useProductCategoryChanges from './hooks/useProductCategoryChanges'

const ProductCategoryChangesContextProvider: FC = ({ children }) => {
    const state = useProductCategoryChanges()

    return <ProductCategoryChangesContext.Provider value={state}>{children}</ProductCategoryChangesContext.Provider>
}

export default ProductCategoryChangesContextProvider
