import React, { FC } from 'react'

import DealStatusesActionsContext from './DealStatusesActionsContext'
import useDealStatusesActions from './hooks/useDealStatusesActions'

const DealStatusesActionsContextProvider: FC = ({ children }) => {
    const state = useDealStatusesActions()

    return <DealStatusesActionsContext.Provider value={state}>{children}</DealStatusesActionsContext.Provider>
}

export default DealStatusesActionsContextProvider
