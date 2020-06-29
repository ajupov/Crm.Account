import React, { FC } from 'react'

import ProductContext from './ProductContext'
import useProduct from './hooks/useProduct'

const ProductContextProvider: FC = ({ children }) => {
    const state = useProduct()

    return <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
}

export default ProductContextProvider
