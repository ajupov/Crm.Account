import React, { FC } from 'react'

import DealTypeChangesFiltersContext from './DealTypeChangesFiltersContext'
import useDealTypeChangesFilters from './hooks/useDealTypeChangesFilters'

const DealTypeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useDealTypeChangesFilters()

    return (
        <DealTypeChangesFiltersContext.Provider value={state}>
            {children}
        </DealTypeChangesFiltersContext.Provider>
    )
}

export default DealTypeChangesFiltersContextProvider
