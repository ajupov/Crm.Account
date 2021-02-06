import React, { FC } from 'react'

import DealAttributeChangesFiltersContext from './DealAttributeChangesFiltersContext'
import useDealAttributeChangesFilters from './hooks/useDealAttributeChangesFilters'

const DealAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useDealAttributeChangesFilters()

    return (
        <DealAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </DealAttributeChangesFiltersContext.Provider>
    )
}

export default DealAttributeChangesFiltersContextProvider
