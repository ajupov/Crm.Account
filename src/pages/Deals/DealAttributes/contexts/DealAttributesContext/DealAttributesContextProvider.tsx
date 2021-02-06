import React, { FC } from 'react'

import DealAttributesContext from './DealAttributesContext'
import useDealAttributes from './hooks/useDealAttributes'

const DealAttributesContextProvider: FC = ({ children }) => {
    const state = useDealAttributes()

    return <DealAttributesContext.Provider value={state}>{children}</DealAttributesContext.Provider>
}

export default DealAttributesContextProvider
