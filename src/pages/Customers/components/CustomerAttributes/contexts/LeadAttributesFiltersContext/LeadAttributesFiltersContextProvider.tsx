import React, { FC } from 'react'

import CustomerAttributesFiltersContext from './CustomerAttributesFiltersContext'
import useCustomerAttributesFilters from './hooks/useCustomerAttributesFilters'

const CustomerAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useCustomerAttributesFilters()

    return (
        <CustomerAttributesFiltersContext.Provider value={state}>{children}</CustomerAttributesFiltersContext.Provider>
    )
}

export default CustomerAttributesFiltersContextProvider
