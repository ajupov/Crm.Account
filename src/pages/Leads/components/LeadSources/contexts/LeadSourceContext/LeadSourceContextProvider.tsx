import React, { FC } from 'react'

import LeadSourceContext from './LeadSourceContext'
import useLeadSource from './hooks/useLeadSource'

const LeadSourceContextProvider: FC = ({ children }) => {
    const state = useLeadSource()

    return <LeadSourceContext.Provider value={state}>{children}</LeadSourceContext.Provider>
}

export default LeadSourceContextProvider
