import React, { FC } from 'react'

import DealAttributesFiltersContext from './DealAttributesFiltersContext'
import useDealAttributesFilters from './hooks/useDealAttributesFilters'

const DealAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useDealAttributesFilters()

    return <DealAttributesFiltersContext.Provider value={state}>{children}</DealAttributesFiltersContext.Provider>
}

export default DealAttributesFiltersContextProvider
