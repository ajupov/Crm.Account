import React, { FC } from 'react'

import LeadsContext from './LeadsContext'
import useLeads from './hooks/useLeads'

const LeadsContextProvider: FC = ({ children }) => {
    const state = useLeads()

    return <LeadsContext.Provider value={state}>{children}</LeadsContext.Provider>
}

export default LeadsContextProvider
