import React, { FC } from 'react'

import StockArrivalChangesContext from './StockArrivalChangesContext'
import useStockArrivalChanges from './hooks/useStockArrivalChanges'

const StockArrivalChangesContextProvider: FC = ({ children }) => {
    const state = useStockArrivalChanges()

    return <StockArrivalChangesContext.Provider value={state}>{children}</StockArrivalChangesContext.Provider>
}

export default StockArrivalChangesContextProvider
