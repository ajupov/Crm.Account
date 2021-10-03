import React, { FC } from 'react'

import CustomersFiltersContext from './CustomersFiltersContext'
import useCustomersFilters from './hooks/useCustomersFilters'

const CustomersFiltersContextProvider: FC = ({ children }) => {
    const state = useCustomersFilters()

    return <CustomersFiltersContext.Provider value={state}>{children}</CustomersFiltersContext.Provider>
}

export default CustomersFiltersContextProvider
