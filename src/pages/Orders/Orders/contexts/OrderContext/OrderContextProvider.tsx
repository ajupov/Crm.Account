import React, { FC } from 'react'

import OrderContext from './OrderContext'
import useOrder from './hooks/useOrder'

const OrderContextProvider: FC = ({ children }) => {
    const state = useOrder()

    return <OrderContext.Provider value={state}>{children}</OrderContext.Provider>
}

export default OrderContextProvider
