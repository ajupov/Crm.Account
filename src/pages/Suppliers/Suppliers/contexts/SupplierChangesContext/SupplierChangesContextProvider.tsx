import React, { FC } from 'react'

import SupplierChangesContext from './SupplierChangesContext'
import useSupplierChanges from './hooks/useSupplierChanges'

const SupplierChangesContextProvider: FC = ({ children }) => {
    const state = useSupplierChanges()

    return <SupplierChangesContext.Provider value={state}>{children}</SupplierChangesContext.Provider>
}

export default SupplierChangesContextProvider
