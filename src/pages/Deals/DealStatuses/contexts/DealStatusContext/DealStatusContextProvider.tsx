import React, { FC } from 'react'

import OrderStatusContext from './OrderStatusContext'
import useOrderStatus from './hooks/useOrderStatus'

const OrderStatusContextProvider: FC = ({ children }) => {
    const state = useOrderStatus()

    return <OrderStatusContext.Provider value={state}>{children}</OrderStatusContext.Provider>
}

export default OrderStatusContextProvider
