import React, { FC } from 'react'

import SuppliersContext from './SuppliersContext'
import useSuppliers from './hooks/useSuppliers'

const SuppliersContextProvider: FC = ({ children }) => {
    const state = useSuppliers()

    return <SuppliersContext.Provider value={state}>{children}</SuppliersContext.Provider>
}

export default SuppliersContextProvider
