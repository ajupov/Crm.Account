import React, { FC } from 'react'

import OrderStatusesContext from './OrderStatusesContext'
import useOrderStatuses from './hooks/useOrderStatuses'

const OrderStatusesContextProvider: FC = ({ children }) => {
    const state = useOrderStatuses()

    return <OrderStatusesContext.Provider value={state}>{children}</OrderStatusesContext.Provider>
}

export default OrderStatusesContextProvider
