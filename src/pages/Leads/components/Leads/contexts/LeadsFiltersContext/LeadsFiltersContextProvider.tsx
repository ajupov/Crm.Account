import React, { FC } from 'react'

import LeadsFiltersContext from './LeadsFiltersContext'
import useLeadsFilters from './hooks/useLeadsFilters'

const LeadsFiltersContextProvider: FC = ({ children }) => {
    const state = useLeadsFilters()

    return <LeadsFiltersContext.Provider value={state}>{children}</LeadsFiltersContext.Provider>
}

export default LeadsFiltersContextProvider
