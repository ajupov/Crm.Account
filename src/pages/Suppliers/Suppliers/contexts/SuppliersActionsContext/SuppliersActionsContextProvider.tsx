import React, { FC } from 'react'

import SuppliersActionsContext from './SuppliersActionsContext'
import useSuppliersActions from './hooks/useSuppliersActions'

const SuppliersActionsContextProvider: FC = ({ children }) => {
    const state = useSuppliersActions()

    return <SuppliersActionsContext.Provider value={state}>{children}</SuppliersActionsContext.Provider>
}

export default SuppliersActionsContextProvider
