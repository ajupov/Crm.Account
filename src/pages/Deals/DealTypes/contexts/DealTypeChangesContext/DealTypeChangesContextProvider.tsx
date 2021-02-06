import React, { FC } from 'react'

import DealTypeChangesContext from './DealTypeChangesContext'
import useDealTypeChanges from './hooks/useDealTypeChanges'

const DealTypeChangesContextProvider: FC = ({ children }) => {
    const state = useDealTypeChanges()

    return <DealTypeChangesContext.Provider value={state}>{children}</DealTypeChangesContext.Provider>
}

export default DealTypeChangesContextProvider
