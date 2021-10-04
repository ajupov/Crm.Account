import React, { FC } from 'react'

import CustomerSourcesContext from './CustomerSourcesContext'
import useCustomerSources from './hooks/useCustomerSources'

const CustomerSourcesContextProvider: FC = ({ children }) => {
    const state = useCustomerSources()

    return <CustomerSourcesContext.Provider value={state}>{children}</CustomerSourcesContext.Provider>
}

export default CustomerSourcesContextProvider
