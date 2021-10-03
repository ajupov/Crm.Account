import React, { FC } from 'react'

import OrderAttributesActionsContext from './OrderAttributesActionsContext'
import useOrderAttributesActions from './hooks/useOrderAttributesActions'

const OrderAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useOrderAttributesActions()

    return <OrderAttributesActionsContext.Provider value={state}>{children}</OrderAttributesActionsContext.Provider>
}

export default OrderAttributesActionsContextProvider
