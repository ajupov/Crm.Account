import React, { FC } from 'react'

import DealTypeContext from './DealTypeContext'
import useDealType from './hooks/useDealType'

const DealTypeContextProvider: FC = ({ children }) => {
    const state = useDealType()

    return <DealTypeContext.Provider value={state}>{children}</DealTypeContext.Provider>
}

export default DealTypeContextProvider
