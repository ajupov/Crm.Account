import React, { FC } from 'react'

import ProductStatusesActionsContext from './ProductStatusesActionsContext'
import useProductStatusesActions from './hooks/useProductStatusesActions'

const ProductStatusesActionsContextProvider: FC = ({ children }) => {
    const state = useProductStatusesActions()

    return <ProductStatusesActionsContext.Provider value={state}>{children}</ProductStatusesActionsContext.Provider>
}

export default ProductStatusesActionsContextProvider
