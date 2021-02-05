import React, { FC } from 'react'

import LeadAttributesFiltersContext from './LeadAttributesFiltersContext'
import useLeadAttributesFilters from './hooks/useLeadAttributesFilters'

const LeadAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useLeadAttributesFilters()

    return <LeadAttributesFiltersContext.Provider value={state}>{children}</LeadAttributesFiltersContext.Provider>
}

export default LeadAttributesFiltersContextProvider
