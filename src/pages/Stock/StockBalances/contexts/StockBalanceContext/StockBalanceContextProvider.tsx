import React, { FC } from 'react'

import StockBalanceContext from './StockBalanceContext'
import useStockBalance from './hooks/useStockBalance'

const StockBalanceContextProvider: FC = ({ children }) => {
    const state = useStockBalance()

    return <StockBalanceContext.Provider value={state}>{children}</StockBalanceContext.Provider>
}

export default StockBalanceContextProvider
