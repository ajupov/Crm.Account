import React, { FC } from 'react'

import DealAttributeContext from './DealAttributeContext'
import useDealAttribute from './hooks/useDealAttribute'

const DealAttributeContextProvider: FC = ({ children }) => {
    const state = useDealAttribute()

    return <DealAttributeContext.Provider value={state}>{children}</DealAttributeContext.Provider>
}

export default DealAttributeContextProvider
