import React, { FC } from 'react'

import LeadSourceChangesFiltersContext from './LeadSourceChangesFiltersContext'
import useLeadSourceChangesFilters from './hooks/useLeadSourceChangesFilters'

const LeadSourceChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useLeadSourceChangesFilters()

    return (
        <LeadSourceChangesFiltersContext.Provider value={state}>
            {children}
        </LeadSourceChangesFiltersContext.Provider>
    )
}

export default LeadSourceChangesFiltersContextProvider
