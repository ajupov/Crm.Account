import React, { FC } from 'react'

import ProductStatusContext from './ProductStatusContext'
import useProductStatus from './hooks/useProductStatus'

const ProductStatusContextProvider: FC = ({ children }) => {
    const state = useProductStatus()

    return <ProductStatusContext.Provider value={state}>{children}</ProductStatusContext.Provider>
}

export default ProductStatusContextProvider
