import React, { FC } from 'react'

import OrderStatusesFiltersContext from './OrderStatusesFiltersContext'
import useOrderStatusesFilters from './hooks/useOrderStatusesFilters'

const OrderStatusesFiltersContextProvider: FC = ({ children }) => {
    const state = useOrderStatusesFilters()

    return <OrderStatusesFiltersContext.Provider value={state}>{children}</OrderStatusesFiltersContext.Provider>
}

export default OrderStatusesFiltersContextProvider
