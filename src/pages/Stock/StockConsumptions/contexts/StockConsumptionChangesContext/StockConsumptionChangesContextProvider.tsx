import React, { FC } from 'react'

import StockConsumptionChangesContext from './StockConsumptionChangesContext'
import useStockConsumptionChanges from './hooks/useStockConsumptionChanges'

const StockConsumptionChangesContextProvider: FC = ({ children }) => {
    const state = useStockConsumptionChanges()

    return <StockConsumptionChangesContext.Provider value={state}>{children}</StockConsumptionChangesContext.Provider>
}

export default StockConsumptionChangesContextProvider
