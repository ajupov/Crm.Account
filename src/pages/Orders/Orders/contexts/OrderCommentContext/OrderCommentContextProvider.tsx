import React, { FC } from 'react'

import OrderCommentContext from './OrderCommentContext'
import useOrders from './hooks/useOrderComment'

const OrderCommentContextProvider: FC = ({ children }) => {
    const state = useOrders()

    return <OrderCommentContext.Provider value={state}>{children}</OrderCommentContext.Provider>
}

export default OrderCommentContextProvider
