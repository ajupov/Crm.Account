import React, { FC } from 'react'

import CustomerSourceChangesContext from './CustomerSourceChangesContext'
import useCustomerSourceChanges from './hooks/useCustomerSourceChanges'

const CustomerSourceChangesContextProvider: FC = ({ children }) => {
    const state = useCustomerSourceChanges()

    return <CustomerSourceChangesContext.Provider value={state}>{children}</CustomerSourceChangesContext.Provider>
}

export default CustomerSourceChangesContextProvider
