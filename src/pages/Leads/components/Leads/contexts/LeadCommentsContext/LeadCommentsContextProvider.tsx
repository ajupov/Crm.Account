import React, { FC } from 'react'

import LeadCommentsContext from './LeadCommentsContext'
import useLeads from './hooks/useLeadComments'

const LeadCommentsContextProvider: FC = ({ children }) => {
    const state = useLeads()

    return <LeadCommentsContext.Provider value={state}>{children}</LeadCommentsContext.Provider>
}

export default LeadCommentsContextProvider
