import React, { FC } from 'react'

import SupplierContext from './SupplierContext'
import useSupplier from './hooks/useSupplier'

const SupplierContextProvider: FC = ({ children }) => {
    const state = useSupplier()

    return <SupplierContext.Provider value={state}>{children}</SupplierContext.Provider>
}

export default SupplierContextProvider
