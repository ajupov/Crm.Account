import React, { FC } from 'react'

import StockArrivalContext from './StockArrivalContext'
import useStockArrival from './hooks/useStockArrival'

const StockArrivalContextProvider: FC = ({ children }) => {
    const state = useStockArrival()

    return <StockArrivalContext.Provider value={state}>{children}</StockArrivalContext.Provider>
}

export default StockArrivalContextProvider
