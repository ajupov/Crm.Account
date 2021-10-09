import React, { FC } from 'react'

import ProductAttributeContext from './ProductAttributeContext'
import useProductAttribute from './hooks/useProductAttribute'

const ProductAttributeContextProvider: FC = ({ children }) => {
    const state = useProductAttribute()

    return <ProductAttributeContext.Provider value={state}>{children}</ProductAttributeContext.Provider>
}

export default ProductAttributeContextProvider
