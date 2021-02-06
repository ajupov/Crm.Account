import React, { FC } from 'react'

import DealStatusChangesFiltersContext from './DealStatusChangesFiltersContext'
import useDealStatusChangesFilters from './hooks/useDealStatusChangesFilters'

const DealStatusChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useDealStatusChangesFilters()

    return (
        <DealStatusChangesFiltersContext.Provider value={state}>
            {children}
        </DealStatusChangesFiltersContext.Provider>
    )
}

export default DealStatusChangesFiltersContextProvider
