import React, { FC } from 'react'

import LeadsActionsContext from './LeadsActionsContext'
import useLeadsActions from './hooks/useLeadsActions'

const LeadsActionsContextProvider: FC = ({ children }) => {
    const state = useLeadsActions()

    return <LeadsActionsContext.Provider value={state}>{children}</LeadsActionsContext.Provider>
}

export default LeadsActionsContextProvider
