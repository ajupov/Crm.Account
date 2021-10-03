import React, { FC } from 'react'

import OrderAttributesContext from './OrderAttributesContext'
import useOrderAttributes from './hooks/useOrderAttributes'

const OrderAttributesContextProvider: FC = ({ children }) => {
    const state = useOrderAttributes()

    return <OrderAttributesContext.Provider value={state}>{children}</OrderAttributesContext.Provider>
}

export default OrderAttributesContextProvider
