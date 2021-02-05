import React, { FC } from 'react'

import LeadSourceChangesContext from './LeadSourceChangesContext'
import useLeadSourceChanges from './hooks/useLeadSourceChanges'

const LeadSourceChangesContextProvider: FC = ({ children }) => {
    const state = useLeadSourceChanges()

    return <LeadSourceChangesContext.Provider value={state}>{children}</LeadSourceChangesContext.Provider>
}

export default LeadSourceChangesContextProvider
