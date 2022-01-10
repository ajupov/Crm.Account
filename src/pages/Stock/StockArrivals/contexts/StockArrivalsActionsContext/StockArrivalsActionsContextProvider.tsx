import React, { FC } from 'react'

import StockArrivalsActionsContext from './StockArrivalsActionsContext'
import useStockArrivalsActions from './hooks/useStockArrivalsActions'

const StockArrivalsActionsContextProvider: FC = ({ children }) => {
    const state = useStockArrivalsActions()

    return <StockArrivalsActionsContext.Provider value={state}>{children}</StockArrivalsActionsContext.Provider>
}

export default StockArrivalsActionsContextProvider
