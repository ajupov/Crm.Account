import React, { FC } from 'react'

import OrderTypesActionsContext from './OrderTypesActionsContext'
import useOrderTypesActions from './hooks/useOrderTypesActions'

const OrderTypesActionsContextProvider: FC = ({ children }) => {
    const state = useOrderTypesActions()

    return <OrderTypesActionsContext.Provider value={state}>{children}</OrderTypesActionsContext.Provider>
}

export default OrderTypesActionsContextProvider
