import React, { FC } from 'react'

import CustomerChangesContext from './CustomerChangesContext'
import useCustomerChanges from './hooks/useCustomerChanges'

const CustomerChangesContextProvider: FC = ({ children }) => {
    const state = useCustomerChanges()

    return <CustomerChangesContext.Provider value={state}>{children}</CustomerChangesContext.Provider>
}

export default CustomerChangesContextProvider
