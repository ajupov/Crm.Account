import React, { FC } from 'react'

import StockArrivalsFiltersContext from './StockArrivalsFiltersContext'
import useStockArrivalsFilters from './hooks/useStockArrivalsFilters'

const StockArrivalsFiltersContextProvider: FC = ({ children }) => {
    const state = useStockArrivalsFilters()

    return <StockArrivalsFiltersContext.Provider value={state}>{children}</StockArrivalsFiltersContext.Provider>
}

export default StockArrivalsFiltersContextProvider
