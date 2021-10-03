import React, { FC } from 'react'

import OrderAttributeContext from './OrderAttributeContext'
import useOrderAttribute from './hooks/useOrderAttribute'

const OrderAttributeContextProvider: FC = ({ children }) => {
    const state = useOrderAttribute()

    return <OrderAttributeContext.Provider value={state}>{children}</OrderAttributeContext.Provider>
}

export default OrderAttributeContextProvider
