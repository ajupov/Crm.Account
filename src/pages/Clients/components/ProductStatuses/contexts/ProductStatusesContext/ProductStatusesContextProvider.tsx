import React, { FC } from 'react'

import ProductStatusesContext from './ProductStatusesContext'
import useProductStatuses from './hooks/useProductStatuses'

const ProductStatusesContextProvider: FC = ({ children }) => {
    const state = useProductStatuses()

    return <ProductStatusesContext.Provider value={state}>{children}</ProductStatusesContext.Provider>
}

export default ProductStatusesContextProvider
