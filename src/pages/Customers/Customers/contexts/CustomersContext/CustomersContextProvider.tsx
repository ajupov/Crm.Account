import React, { FC } from 'react'

import CustomersContext from './CustomersContext'
import useCustomers from './hooks/useCustomers'

const CustomersContextProvider: FC = ({ children }) => {
    const state = useCustomers()

    return <CustomersContext.Provider value={state}>{children}</CustomersContext.Provider>
}

export default CustomersContextProvider
