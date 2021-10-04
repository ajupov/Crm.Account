import React, { FC } from 'react'

import OrderTypeChangesFiltersContext from './OrderTypeChangesFiltersContext'
import useOrderTypeChangesFilters from './hooks/useOrderTypeChangesFilters'

const OrderTypeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useOrderTypeChangesFilters()

    return <OrderTypeChangesFiltersContext.Provider value={state}>{children}</OrderTypeChangesFiltersContext.Provider>
}

export default OrderTypeChangesFiltersContextProvider
