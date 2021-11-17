import React, { FC } from 'react'

import SupplierAttributesActionsContext from './SupplierAttributesActionsContext'
import useSupplierAttributesActions from './hooks/useSupplierAttributesActions'

const SupplierAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useSupplierAttributesActions()

    return (
        <SupplierAttributesActionsContext.Provider value={state}>{children}</SupplierAttributesActionsContext.Provider>
    )
}

export default SupplierAttributesActionsContextProvider
