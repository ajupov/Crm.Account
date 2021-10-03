import React, { FC } from 'react'

import OrderAttributeChangesContext from './OrderAttributeChangesContext'
import useOrderAttributeChanges from './hooks/useOrderAttributeChanges'

const OrderAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useOrderAttributeChanges()

    return <OrderAttributeChangesContext.Provider value={state}>{children}</OrderAttributeChangesContext.Provider>
}

export default OrderAttributeChangesContextProvider
