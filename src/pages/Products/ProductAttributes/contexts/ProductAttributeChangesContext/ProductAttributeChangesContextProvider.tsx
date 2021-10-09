import React, { FC } from 'react'

import ProductAttributeChangesContext from './ProductAttributeChangesContext'
import useProductAttributeChanges from './hooks/useProductAttributeChanges'

const ProductAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useProductAttributeChanges()

    return <ProductAttributeChangesContext.Provider value={state}>{children}</ProductAttributeChangesContext.Provider>
}

export default ProductAttributeChangesContextProvider
