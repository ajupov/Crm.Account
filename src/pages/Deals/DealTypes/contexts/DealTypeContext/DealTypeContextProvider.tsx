import React, { FC } from 'react'

import OrderTypeContext from './OrderTypeContext'
import useOrderType from './hooks/useOrderType'

const OrderTypeContextProvider: FC = ({ children }) => {
    const state = useOrderType()

    return <OrderTypeContext.Provider value={state}>{children}</OrderTypeContext.Provider>
}

export default OrderTypeContextProvider
