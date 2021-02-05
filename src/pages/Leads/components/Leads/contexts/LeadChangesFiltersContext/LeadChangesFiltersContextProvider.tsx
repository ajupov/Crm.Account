import React, { FC } from 'react'

import LeadChangesFiltersContext from './LeadChangesFiltersContext'
import useLeadChangesFilters from './hooks/useLeadChangesFilters'

const LeadChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useLeadChangesFilters()

    return <LeadChangesFiltersContext.Provider value={state}>{children}</LeadChangesFiltersContext.Provider>
}

export default LeadChangesFiltersContextProvider
