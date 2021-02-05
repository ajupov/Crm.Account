import React, { FC } from 'react'

import LeadContext from './LeadContext'
import useLead from './hooks/useLead'

const LeadContextProvider: FC = ({ children }) => {
    const state = useLead()

    return <LeadContext.Provider value={state}>{children}</LeadContext.Provider>
}

export default LeadContextProvider
