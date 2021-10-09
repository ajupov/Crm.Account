import React, { FC } from 'react'

import ProductAttributesActionsContext from './ProductAttributesActionsContext'
import useProductAttributesActions from './hooks/useProductAttributesActions'

const ProductAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useProductAttributesActions()

    return <ProductAttributesActionsContext.Provider value={state}>{children}</ProductAttributesActionsContext.Provider>
}

export default ProductAttributesActionsContextProvider
