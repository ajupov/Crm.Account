import React, { FC } from 'react'

import CustomerAttributeChangesContext from './CustomerAttributeChangesContext'
import useCustomerAttributeChanges from './hooks/useCustomerAttributeChanges'

const CustomerAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useCustomerAttributeChanges()

    return <CustomerAttributeChangesContext.Provider value={state}>{children}</CustomerAttributeChangesContext.Provider>
}

export default CustomerAttributeChangesContextProvider
