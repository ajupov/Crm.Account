import React, { FC } from 'react'

import CustomersActionsContext from './CustomersActionsContext'
import useCustomersActions from './hooks/useCustomersActions'

const CustomersActionsContextProvider: FC = ({ children }) => {
    const state = useCustomersActions()

    return <CustomersActionsContext.Provider value={state}>{children}</CustomersActionsContext.Provider>
}

export default CustomersActionsContextProvider
