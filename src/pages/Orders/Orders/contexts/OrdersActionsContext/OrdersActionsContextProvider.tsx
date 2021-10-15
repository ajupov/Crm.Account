import React, { FC } from 'react'

import OrdersActionsContext from './OrdersActionsContext'
import useOrdersActions from './hooks/useOrdersActions'

const OrdersActionsContextProvider: FC = ({ children }) => {
    const state = useOrdersActions()

    return <OrdersActionsContext.Provider value={state}>{children}</OrdersActionsContext.Provider>
}

export default OrdersActionsContextProvider
