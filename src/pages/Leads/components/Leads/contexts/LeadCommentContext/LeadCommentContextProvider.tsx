import React, { FC } from 'react'

import CustomerCommentContext from './CustomerCommentContext'
import useCustomers from './hooks/useCustomerComment'

const CustomerCommentContextProvider: FC = ({ children }) => {
    const state = useCustomers()

    return <CustomerCommentContext.Provider value={state}>{children}</CustomerCommentContext.Provider>
}

export default CustomerCommentContextProvider
