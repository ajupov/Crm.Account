import React, { FC } from 'react'

import DealAttributeChangesContext from './DealAttributeChangesContext'
import useDealAttributeChanges from './hooks/useDealAttributeChanges'

const DealAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useDealAttributeChanges()

    return <DealAttributeChangesContext.Provider value={state}>{children}</DealAttributeChangesContext.Provider>
}

export default DealAttributeChangesContextProvider
