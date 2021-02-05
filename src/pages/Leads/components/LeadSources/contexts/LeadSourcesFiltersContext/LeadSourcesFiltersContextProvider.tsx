import React, { FC } from 'react'

import LeadSourcesFiltersContext from './LeadSourcesFiltersContext'
import useLeadSourcesFilters from './hooks/useLeadSourcesFilters'

const LeadSourcesFiltersContextProvider: FC = ({ children }) => {
    const state = useLeadSourcesFilters()

    return <LeadSourcesFiltersContext.Provider value={state}>{children}</LeadSourcesFiltersContext.Provider>
}

export default LeadSourcesFiltersContextProvider
