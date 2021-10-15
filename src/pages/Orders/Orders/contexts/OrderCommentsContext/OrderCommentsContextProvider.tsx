import React, { FC } from 'react'

import OrderCommentsContext from './OrderCommentsContext'
import useOrders from './hooks/useOrderComments'

const OrderCommentsContextProvider: FC = ({ children }) => {
    const state = useOrders()

    return <OrderCommentsContext.Provider value={state}>{children}</OrderCommentsContext.Provider>
}

export default OrderCommentsContextProvider
