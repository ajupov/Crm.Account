import React, { FC } from 'react'

import CustomerAttributeContext from './CustomerAttributeContext'
import useCustomerAttribute from './hooks/useCustomerAttribute'

const CustomerAttributeContextProvider: FC = ({ children }) => {
    const state = useCustomerAttribute()

    return <CustomerAttributeContext.Provider value={state}>{children}</CustomerAttributeContext.Provider>
}

export default CustomerAttributeContextProvider
