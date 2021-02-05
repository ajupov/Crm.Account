import React, { FC } from 'react'

import LeadAttributeChangesFiltersContext from './LeadAttributeChangesFiltersContext'
import useLeadAttributeChangesFilters from './hooks/useLeadAttributeChangesFilters'

const LeadAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useLeadAttributeChangesFilters()

    return (
        <LeadAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </LeadAttributeChangesFiltersContext.Provider>
    )
}

export default LeadAttributeChangesFiltersContextProvider
