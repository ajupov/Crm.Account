import React, { FC } from 'react'

import LeadSourcesContext from './LeadSourcesContext'
import useLeadSources from './hooks/useLeadSources'

const LeadSourcesContextProvider: FC = ({ children }) => {
    const state = useLeadSources()

    return <LeadSourcesContext.Provider value={state}>{children}</LeadSourcesContext.Provider>
}

export default LeadSourcesContextProvider
