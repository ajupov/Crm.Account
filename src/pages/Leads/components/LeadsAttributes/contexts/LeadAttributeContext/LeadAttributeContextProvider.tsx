import React, { FC } from 'react'

import LeadAttributeContext from './LeadAttributeContext'
import useLeadAttribute from './hooks/useLeadAttribute'

const LeadAttributeContextProvider: FC = ({ children }) => {
    const state = useLeadAttribute()

    return <LeadAttributeContext.Provider value={state}>{children}</LeadAttributeContext.Provider>
}

export default LeadAttributeContextProvider
