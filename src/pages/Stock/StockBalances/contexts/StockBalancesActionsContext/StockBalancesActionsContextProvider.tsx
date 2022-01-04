import React, { FC } from 'react'

import StockBalancesActionsContext from './StockBalancesActionsContext'
import useStockBalancesActions from './hooks/useStockBalancesActions'

const StockBalancesActionsContextProvider: FC = ({ children }) => {
    const state = useStockBalancesActions()

    return <StockBalancesActionsContext.Provider value={state}>{children}</StockBalancesActionsContext.Provider>
}

export default StockBalancesActionsContextProvider
