import React, { FC } from 'react'

import SupplierAttributesFiltersContext from './SupplierAttributesFiltersContext'
import useSupplierAttributesFilters from './hooks/useSupplierAttributesFilters'

const SupplierAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useSupplierAttributesFilters()

    return (
        <SupplierAttributesFiltersContext.Provider value={state}>{children}</SupplierAttributesFiltersContext.Provider>
    )
}

export default SupplierAttributesFiltersContextProvider
