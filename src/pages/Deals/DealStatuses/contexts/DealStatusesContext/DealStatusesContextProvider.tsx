import React, { FC } from 'react'

import DealStatusesContext from './DealStatusesContext'
import useDealStatuses from './hooks/useDealStatuses'

const DealStatusesContextProvider: FC = ({ children }) => {
    const state = useDealStatuses()

    return <DealStatusesContext.Provider value={state}>{children}</DealStatusesContext.Provider>
}

export default DealStatusesContextProvider
