import React, { FC } from 'react'

import SupplierAttributeChangesContext from './SupplierAttributeChangesContext'
import useSupplierAttributeChanges from './hooks/useSupplierAttributeChanges'

const SupplierAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useSupplierAttributeChanges()

    return <SupplierAttributeChangesContext.Provider value={state}>{children}</SupplierAttributeChangesContext.Provider>
}

export default SupplierAttributeChangesContextProvider
