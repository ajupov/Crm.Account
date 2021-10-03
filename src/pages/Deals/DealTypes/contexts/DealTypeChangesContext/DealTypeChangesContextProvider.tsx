import React, { FC } from 'react'

import OrderTypeChangesContext from './OrderTypeChangesContext'
import useOrderTypeChanges from './hooks/useOrderTypeChanges'

const OrderTypeChangesContextProvider: FC = ({ children }) => {
    const state = useOrderTypeChanges()

    return <OrderTypeChangesContext.Provider value={state}>{children}</OrderTypeChangesContext.Provider>
}

export default OrderTypeChangesContextProvider
