import React, { FC } from 'react'

import OrderStatusChangesContext from './OrderStatusChangesContext'
import useOrderStatusChanges from './hooks/useOrderStatusChanges'

const OrderStatusChangesContextProvider: FC = ({ children }) => {
    const state = useOrderStatusChanges()

    return <OrderStatusChangesContext.Provider value={state}>{children}</OrderStatusChangesContext.Provider>
}

export default OrderStatusChangesContextProvider
