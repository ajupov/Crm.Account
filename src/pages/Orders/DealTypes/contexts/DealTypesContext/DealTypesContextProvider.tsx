import React, { FC } from 'react'

import OrderTypesContext from './OrderTypesContext'
import useOrderTypes from './hooks/useOrderTypes'

const OrderTypesContextProvider: FC = ({ children }) => {
    const state = useOrderTypes()

    return <OrderTypesContext.Provider value={state}>{children}</OrderTypesContext.Provider>
}

export default OrderTypesContextProvider
