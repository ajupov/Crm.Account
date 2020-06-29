import React, { FC } from 'react'

import ProductsContext from './ProductsContext'
import useProducts from './hooks/useProducts'

const ProductsContextProvider: FC = ({ children }) => {
    const state = useProducts()

    return <ProductsContext.Provider value={state}>{children}</ProductsContext.Provider>
}

export default ProductsContextProvider
