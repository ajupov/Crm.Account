import React, { FC } from 'react'

import StockBalancesContext from './StockBalancesContext'
import useStockBalances from './hooks/useStockBalances'

const StockBalancesContextProvider: FC = ({ children }) => {
    const state = useStockBalances()

    return <StockBalancesContext.Provider value={state}>{children}</StockBalancesContext.Provider>
}

export default StockBalancesContextProvider
