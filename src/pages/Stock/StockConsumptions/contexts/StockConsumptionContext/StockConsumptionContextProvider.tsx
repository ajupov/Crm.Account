import React, { FC } from 'react'

import StockConsumptionContext from './StockConsumptionContext'
import useStockConsumption from './hooks/useStockConsumption'

const StockConsumptionContextProvider: FC = ({ children }) => {
    const state = useStockConsumption()

    return <StockConsumptionContext.Provider value={state}>{children}</StockConsumptionContext.Provider>
}

export default StockConsumptionContextProvider
