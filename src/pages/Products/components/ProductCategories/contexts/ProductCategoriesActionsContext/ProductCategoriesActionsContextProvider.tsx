import React, { FC } from 'react'

import ProductCategoriesActionsContext from './ProductCategoriesActionsContext'
import useProductCategoriesActions from './hooks/useProductCategoriesActions'

const ProductCategoriesActionsContextProvider: FC = ({ children }) => {
    const state = useProductCategoriesActions()

    return <ProductCategoriesActionsContext.Provider value={state}>{children}</ProductCategoriesActionsContext.Provider>
}

export default ProductCategoriesActionsContextProvider
