import React, { FC } from 'react'

import OrdersFiltersContext from './OrdersFiltersContext'
import useOrdersFilters from './hooks/useOrdersFilters'

const OrdersFiltersContextProvider: FC = ({ children }) => {
    const state = useOrdersFilters()

    return <OrdersFiltersContext.Provider value={state}>{children}</OrdersFiltersContext.Provider>
}

export default OrdersFiltersContextProvider
