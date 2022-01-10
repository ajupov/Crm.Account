import React, { FC } from 'react'

import StockArrivalsContext from './StockArrivalsContext'
import useStockArrivals from './hooks/useStockArrivals'

const StockArrivalsContextProvider: FC = ({ children }) => {
    const state = useStockArrivals()

    return <StockArrivalsContext.Provider value={state}>{children}</StockArrivalsContext.Provider>
}

export default StockArrivalsContextProvider
