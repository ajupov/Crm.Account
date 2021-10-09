import React, { FC } from 'react'

import ProductChangesContext from './ProductChangesContext'
import useProductChanges from './hooks/useProductChanges'

const ProductChangesContextProvider: FC = ({ children }) => {
    const state = useProductChanges()

    return <ProductChangesContext.Provider value={state}>{children}</ProductChangesContext.Provider>
}

export default ProductChangesContextProvider
