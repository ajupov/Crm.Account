import React, { FC } from 'react'

import CustomerAttributesActionsContext from './CustomerAttributesActionsContext'
import useCustomerAttributesActions from './hooks/useCustomerAttributesActions'

const CustomerAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useCustomerAttributesActions()

    return (
        <CustomerAttributesActionsContext.Provider value={state}>{children}</CustomerAttributesActionsContext.Provider>
    )
}

export default CustomerAttributesActionsContextProvider
