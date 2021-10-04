import React, { FC } from 'react'

import OrdersContext from './OrdersContext'
import useOrders from './hooks/useOrders'

const OrdersContextProvider: FC = ({ children }) => {
    const state = useOrders()

    return <OrdersContext.Provider value={state}>{children}</OrdersContext.Provider>
}

export default OrdersContextProvider
