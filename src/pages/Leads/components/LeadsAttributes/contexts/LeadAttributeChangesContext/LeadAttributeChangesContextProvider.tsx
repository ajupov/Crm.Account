import React, { FC } from 'react'

import LeadAttributeChangesContext from './LeadAttributeChangesContext'
import useLeadAttributeChanges from './hooks/useLeadAttributeChanges'

const LeadAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useLeadAttributeChanges()

    return <LeadAttributeChangesContext.Provider value={state}>{children}</LeadAttributeChangesContext.Provider>
}

export default LeadAttributeChangesContextProvider
