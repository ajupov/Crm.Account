import React, { FC } from 'react'

import OrderChangesContext from './OrderChangesContext'
import useOrderChanges from './hooks/useOrderChanges'

const OrderChangesContextProvider: FC = ({ children }) => {
    const state = useOrderChanges()

    return <OrderChangesContext.Provider value={state}>{children}</OrderChangesContext.Provider>
}

export default OrderChangesContextProvider
