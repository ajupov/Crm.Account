import React, { FC } from 'react'

import CustomerSourcesFiltersContext from './CustomerSourcesFiltersContext'
import useCustomerSourcesFilters from './hooks/useCustomerSourcesFilters'

const CustomerSourcesFiltersContextProvider: FC = ({ children }) => {
    const state = useCustomerSourcesFilters()

    return <CustomerSourcesFiltersContext.Provider value={state}>{children}</CustomerSourcesFiltersContext.Provider>
}

export default CustomerSourcesFiltersContextProvider
