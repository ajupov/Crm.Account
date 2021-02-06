import React, { FC } from 'react'

import DealAttributesActionsContext from './DealAttributesActionsContext'
import useDealAttributesActions from './hooks/useDealAttributesActions'

const DealAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useDealAttributesActions()

    return <DealAttributesActionsContext.Provider value={state}>{children}</DealAttributesActionsContext.Provider>
}

export default DealAttributesActionsContextProvider
