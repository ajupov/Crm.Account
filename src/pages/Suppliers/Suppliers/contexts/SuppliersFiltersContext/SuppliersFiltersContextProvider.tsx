import React, { FC } from 'react'

import SuppliersFiltersContext from './SuppliersFiltersContext'
import useSuppliersFilters from './hooks/useSuppliersFilters'

const SuppliersFiltersContextProvider: FC = ({ children }) => {
    const state = useSuppliersFilters()

    return <SuppliersFiltersContext.Provider value={state}>{children}</SuppliersFiltersContext.Provider>
}

export default SuppliersFiltersContextProvider
