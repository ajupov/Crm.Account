import React, { FC } from 'react'

import DealStatusChangesContext from './DealStatusChangesContext'
import useDealStatusChanges from './hooks/useDealStatusChanges'

const DealStatusChangesContextProvider: FC = ({ children }) => {
    const state = useDealStatusChanges()

    return <DealStatusChangesContext.Provider value={state}>{children}</DealStatusChangesContext.Provider>
}

export default DealStatusChangesContextProvider
