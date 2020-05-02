import React, { FC } from 'react'

import ProductStatusChangesContext from './ProductStatusChangesContext'
import useProductStatusChanges from './hooks/useProductStatusChanges'

const ProductStatusChangesContextProvider: FC = ({ children }) => {
    const state = useProductStatusChanges()

    return <ProductStatusChangesContext.Provider value={state}>{children}</ProductStatusChangesContext.Provider>
}

export default ProductStatusChangesContextProvider
