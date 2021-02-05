import React, { FC } from 'react'

import LeadCommentContext from './LeadCommentContext'
import useLeads from './hooks/useLeadComment'

const LeadCommentContextProvider: FC = ({ children }) => {
    const state = useLeads()

    return <LeadCommentContext.Provider value={state}>{children}</LeadCommentContext.Provider>
}

export default LeadCommentContextProvider
