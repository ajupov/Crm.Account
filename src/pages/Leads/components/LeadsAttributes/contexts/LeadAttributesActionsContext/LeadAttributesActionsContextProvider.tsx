import React, { FC } from 'react'

import LeadAttributesActionsContext from './LeadAttributesActionsContext'
import useLeadAttributesActions from './hooks/useLeadAttributesActions'

const LeadAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useLeadAttributesActions()

    return <LeadAttributesActionsContext.Provider value={state}>{children}</LeadAttributesActionsContext.Provider>
}

export default LeadAttributesActionsContextProvider
