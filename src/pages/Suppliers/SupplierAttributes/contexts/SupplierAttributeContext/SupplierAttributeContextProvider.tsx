import React, { FC } from 'react'

import SupplierAttributeContext from './SupplierAttributeContext'
import useSupplierAttribute from './hooks/useSupplierAttribute'

const SupplierAttributeContextProvider: FC = ({ children }) => {
    const state = useSupplierAttribute()

    return <SupplierAttributeContext.Provider value={state}>{children}</SupplierAttributeContext.Provider>
}

export default SupplierAttributeContextProvider
