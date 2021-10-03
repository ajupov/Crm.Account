import React, { FC } from 'react'

import CustomerChangesFiltersContext from './CustomerChangesFiltersContext'
import useCustomerChangesFilters from './hooks/useCustomerChangesFilters'

const CustomerChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useCustomerChangesFilters()

    return <CustomerChangesFiltersContext.Provider value={state}>{children}</CustomerChangesFiltersContext.Provider>
}

export default CustomerChangesFiltersContextProvider
