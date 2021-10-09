import React, { FC } from 'react'

import ProductsActionsContext from './ProductsActionsContext'
import useProductsActions from './hooks/useProductsActions'

const ProductsActionsContextProvider: FC = ({ children }) => {
    const state = useProductsActions()

    return <ProductsActionsContext.Provider value={state}>{children}</ProductsActionsContext.Provider>
}

export default ProductsActionsContextProvider
