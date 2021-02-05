import React, { FC } from 'react'

import LeadChangesContext from './LeadChangesContext'
import useLeadChanges from './hooks/useLeadChanges'

const LeadChangesContextProvider: FC = ({ children }) => {
    const state = useLeadChanges()

    return <LeadChangesContext.Provider value={state}>{children}</LeadChangesContext.Provider>
}

export default LeadChangesContextProvider
