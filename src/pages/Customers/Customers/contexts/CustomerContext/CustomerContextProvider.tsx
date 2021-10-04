import React, { FC } from 'react'

import CustomerContext from './CustomerContext'
import useCustomer from './hooks/useCustomer'

const CustomerContextProvider: FC = ({ children }) => {
    const state = useCustomer()

    return <CustomerContext.Provider value={state}>{children}</CustomerContext.Provider>
}

export default CustomerContextProvider
