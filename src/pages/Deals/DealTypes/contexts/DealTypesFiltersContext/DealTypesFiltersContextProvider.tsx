import React, { FC } from 'react'

import OrderTypesFiltersContext from './OrderTypesFiltersContext'
import useOrderTypesFilters from './hooks/useOrderTypesFilters'

const OrderTypesFiltersContextProvider: FC = ({ children }) => {
    const state = useOrderTypesFilters()

    return <OrderTypesFiltersContext.Provider value={state}>{children}</OrderTypesFiltersContext.Provider>
}

export default OrderTypesFiltersContextProvider
