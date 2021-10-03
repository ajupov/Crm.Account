import React, { FC } from 'react'

import CustomerAttributeChangesFiltersContext from './CustomerAttributeChangesFiltersContext'
import useCustomerAttributeChangesFilters from './hooks/useCustomerAttributeChangesFilters'

const CustomerAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useCustomerAttributeChangesFilters()

    return (
        <CustomerAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </CustomerAttributeChangesFiltersContext.Provider>
    )
}

export default CustomerAttributeChangesFiltersContextProvider
