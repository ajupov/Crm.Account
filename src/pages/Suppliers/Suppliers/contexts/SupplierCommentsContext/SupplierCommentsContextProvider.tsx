import React, { FC } from 'react'

import SupplierCommentsContext from './SupplierCommentsContext'
import useSuppliers from './hooks/useSupplierComments'

const SupplierCommentsContextProvider: FC = ({ children }) => {
    const state = useSuppliers()

    return <SupplierCommentsContext.Provider value={state}>{children}</SupplierCommentsContext.Provider>
}

export default SupplierCommentsContextProvider
