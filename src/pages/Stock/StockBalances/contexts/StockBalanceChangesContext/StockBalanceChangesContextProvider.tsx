import React, { FC } from 'react'

import StockBalanceChangesContext from './StockBalanceChangesContext'
import useStockBalanceChanges from './hooks/useStockBalanceChanges'

const StockBalanceChangesContextProvider: FC = ({ children }) => {
    const state = useStockBalanceChanges()

    return <StockBalanceChangesContext.Provider value={state}>{children}</StockBalanceChangesContext.Provider>
}

export default StockBalanceChangesContextProvider
