import React, { FC } from 'react'

import SupplierChangesFiltersContext from './SupplierChangesFiltersContext'
import useSupplierChangesFilters from './hooks/useSupplierChangesFilters'

const SupplierChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useSupplierChangesFilters()

    return <SupplierChangesFiltersContext.Provider value={state}>{children}</SupplierChangesFiltersContext.Provider>
}

export default SupplierChangesFiltersContextProvider
