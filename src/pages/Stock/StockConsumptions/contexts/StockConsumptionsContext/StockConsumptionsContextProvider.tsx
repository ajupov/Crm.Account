import React, { FC } from 'react'

import StockConsumptionsContext from './StockConsumptionsContext'
import useStockConsumptions from './hooks/useStockConsumptions'

const StockConsumptionsContextProvider: FC = ({ children }) => {
    const state = useStockConsumptions()

    return <StockConsumptionsContext.Provider value={state}>{children}</StockConsumptionsContext.Provider>
}

export default StockConsumptionsContextProvider
