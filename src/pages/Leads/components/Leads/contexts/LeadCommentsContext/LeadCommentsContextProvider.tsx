import React, { FC } from 'react'

import CustomerCommentsContext from './CustomerCommentsContext'
import useCustomers from './hooks/useCustomerComments'

const CustomerCommentsContextProvider: FC = ({ children }) => {
    const state = useCustomers()

    return <CustomerCommentsContext.Provider value={state}>{children}</CustomerCommentsContext.Provider>
}

export default CustomerCommentsContextProvider
