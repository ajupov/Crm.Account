import React, { FC } from 'react'

import CustomerSourceChangesFiltersContext from './CustomerSourceChangesFiltersContext'
import useCustomerSourceChangesFilters from './hooks/useCustomerSourceChangesFilters'

const CustomerSourceChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useCustomerSourceChangesFilters()

    return (
        <CustomerSourceChangesFiltersContext.Provider value={state}>
            {children}
        </CustomerSourceChangesFiltersContext.Provider>
    )
}

export default CustomerSourceChangesFiltersContextProvider
