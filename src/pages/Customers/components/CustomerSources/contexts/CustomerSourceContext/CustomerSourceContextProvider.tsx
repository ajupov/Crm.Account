import React, { FC } from 'react'

import CustomerSourceContext from './CustomerSourceContext'
import useCustomerSource from './hooks/useCustomerSource'

const CustomerSourceContextProvider: FC = ({ children }) => {
    const state = useCustomerSource()

    return <CustomerSourceContext.Provider value={state}>{children}</CustomerSourceContext.Provider>
}

export default CustomerSourceContextProvider
