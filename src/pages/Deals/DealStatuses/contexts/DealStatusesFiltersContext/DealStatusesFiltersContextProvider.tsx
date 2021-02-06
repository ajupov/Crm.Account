import React, { FC } from 'react'

import DealStatusesFiltersContext from './DealStatusesFiltersContext'
import useDealStatusesFilters from './hooks/useDealStatusesFilters'

const DealStatusesFiltersContextProvider: FC = ({ children }) => {
    const state = useDealStatusesFilters()

    return <DealStatusesFiltersContext.Provider value={state}>{children}</DealStatusesFiltersContext.Provider>
}

export default DealStatusesFiltersContextProvider
