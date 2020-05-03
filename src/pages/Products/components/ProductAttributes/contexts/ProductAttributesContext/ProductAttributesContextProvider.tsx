import React, { FC } from 'react'

import ProductAttributesContext from './ProductAttributesContext'
import useProductAttributes from './hooks/useProductAttributes'

const ProductAttributesContextProvider: FC = ({ children }) => {
    const state = useProductAttributes()

    return <ProductAttributesContext.Provider value={state}>{children}</ProductAttributesContext.Provider>
}

export default ProductAttributesContextProvider
