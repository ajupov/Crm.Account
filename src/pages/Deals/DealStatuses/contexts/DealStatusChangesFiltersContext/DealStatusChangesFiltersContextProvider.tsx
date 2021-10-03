import React, { FC } from 'react'

import OrderStatusChangesFiltersContext from './OrderStatusChangesFiltersContext'
import useOrderStatusChangesFilters from './hooks/useOrderStatusChangesFilters'

const OrderStatusChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useOrderStatusChangesFilters()

    return (
        <OrderStatusChangesFiltersContext.Provider value={state}>{children}</OrderStatusChangesFiltersContext.Provider>
    )
}

export default OrderStatusChangesFiltersContextProvider
