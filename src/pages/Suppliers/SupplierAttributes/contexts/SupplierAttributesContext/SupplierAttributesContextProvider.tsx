import React, { FC } from 'react'

import SupplierAttributesContext from './SupplierAttributesContext'
import useSupplierAttributes from './hooks/useSupplierAttributes'

const SupplierAttributesContextProvider: FC = ({ children }) => {
    const state = useSupplierAttributes()

    return <SupplierAttributesContext.Provider value={state}>{children}</SupplierAttributesContext.Provider>
}

export default SupplierAttributesContextProvider
