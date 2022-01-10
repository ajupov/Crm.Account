import React, { FC } from 'react'

import StockConsumptionsActionsContext from './StockConsumptionsActionsContext'
import useStockConsumptionsActions from './hooks/useStockConsumptionsActions'

const StockConsumptionsActionsContextProvider: FC = ({ children }) => {
    const state = useStockConsumptionsActions()

    return <StockConsumptionsActionsContext.Provider value={state}>{children}</StockConsumptionsActionsContext.Provider>
}

export default StockConsumptionsActionsContextProvider
