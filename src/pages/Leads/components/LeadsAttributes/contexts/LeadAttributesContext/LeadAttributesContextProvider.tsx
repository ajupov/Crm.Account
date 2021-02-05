import React, { FC } from 'react'

import LeadAttributesContext from './LeadAttributesContext'
import useLeadAttributes from './hooks/useLeadAttributes'

const LeadAttributesContextProvider: FC = ({ children }) => {
    const state = useLeadAttributes()

    return <LeadAttributesContext.Provider value={state}>{children}</LeadAttributesContext.Provider>
}

export default LeadAttributesContextProvider
