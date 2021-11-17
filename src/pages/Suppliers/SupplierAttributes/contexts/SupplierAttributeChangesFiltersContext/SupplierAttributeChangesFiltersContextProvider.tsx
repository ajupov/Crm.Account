import React, { FC } from 'react'

import SupplierAttributeChangesFiltersContext from './SupplierAttributeChangesFiltersContext'
import useSupplierAttributeChangesFilters from './hooks/useSupplierAttributeChangesFilters'

const SupplierAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useSupplierAttributeChangesFilters()

    return (
        <SupplierAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </SupplierAttributeChangesFiltersContext.Provider>
    )
}

export default SupplierAttributeChangesFiltersContextProvider
