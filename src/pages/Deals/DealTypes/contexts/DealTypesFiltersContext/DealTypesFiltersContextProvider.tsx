import React, { FC } from 'react'

import DealTypesFiltersContext from './DealTypesFiltersContext'
import useDealTypesFilters from './hooks/useDealTypesFilters'

const DealTypesFiltersContextProvider: FC = ({ children }) => {
    const state = useDealTypesFilters()

    return <DealTypesFiltersContext.Provider value={state}>{children}</DealTypesFiltersContext.Provider>
}

export default DealTypesFiltersContextProvider
