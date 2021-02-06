import React, { FC } from 'react'

import DealTypesActionsContext from './DealTypesActionsContext'
import useDealTypesActions from './hooks/useDealTypesActions'

const DealTypesActionsContextProvider: FC = ({ children }) => {
    const state = useDealTypesActions()

    return <DealTypesActionsContext.Provider value={state}>{children}</DealTypesActionsContext.Provider>
}

export default DealTypesActionsContextProvider
