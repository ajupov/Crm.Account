import React, { FC } from 'react'

import DealTypesContext from './DealTypesContext'
import useDealTypes from './hooks/useDealTypes'

const DealTypesContextProvider: FC = ({ children }) => {
    const state = useDealTypes()

    return <DealTypesContext.Provider value={state}>{children}</DealTypesContext.Provider>
}

export default DealTypesContextProvider
