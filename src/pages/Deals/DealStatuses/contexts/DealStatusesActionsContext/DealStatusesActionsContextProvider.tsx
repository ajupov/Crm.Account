import React, { FC } from 'react'

import OrderStatusesActionsContext from './OrderStatusesActionsContext'
import useOrderStatusesActions from './hooks/useOrderStatusesActions'

const OrderStatusesActionsContextProvider: FC = ({ children }) => {
    const state = useOrderStatusesActions()

    return <OrderStatusesActionsContext.Provider value={state}>{children}</OrderStatusesActionsContext.Provider>
}

export default OrderStatusesActionsContextProvider
