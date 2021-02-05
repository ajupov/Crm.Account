import React, { FC } from 'react'

import LeadSourcesActionsContext from './LeadSourcesActionsContext'
import useLeadSourcesActions from './hooks/useLeadSourcesActions'

const LeadSourcesActionsContextProvider: FC = ({ children }) => {
    const state = useLeadSourcesActions()

    return <LeadSourcesActionsContext.Provider value={state}>{children}</LeadSourcesActionsContext.Provider>
}

export default LeadSourcesActionsContextProvider
