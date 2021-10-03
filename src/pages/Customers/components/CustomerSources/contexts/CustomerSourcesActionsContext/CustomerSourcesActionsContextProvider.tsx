import React, { FC } from 'react'

import CustomerSourcesActionsContext from './CustomerSourcesActionsContext'
import useCustomerSourcesActions from './hooks/useCustomerSourcesActions'

const CustomerSourcesActionsContextProvider: FC = ({ children }) => {
    const state = useCustomerSourcesActions()

    return <CustomerSourcesActionsContext.Provider value={state}>{children}</CustomerSourcesActionsContext.Provider>
}

export default CustomerSourcesActionsContextProvider
