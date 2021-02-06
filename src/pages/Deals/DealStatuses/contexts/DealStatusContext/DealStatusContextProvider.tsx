import React, { FC } from 'react'

import DealStatusContext from './DealStatusContext'
import useDealStatus from './hooks/useDealStatus'

const DealStatusContextProvider: FC = ({ children }) => {
    const state = useDealStatus()

    return <DealStatusContext.Provider value={state}>{children}</DealStatusContext.Provider>
}

export default DealStatusContextProvider
