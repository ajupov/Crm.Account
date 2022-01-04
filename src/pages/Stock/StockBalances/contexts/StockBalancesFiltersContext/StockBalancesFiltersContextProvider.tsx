import React, { FC } from 'react'

import StockBalancesFiltersContext from './StockBalancesFiltersContext'
import useStockBalancesFilters from './hooks/useStockBalancesFilters'

const StockBalancesFiltersContextProvider: FC = ({ children }) => {
    const state = useStockBalancesFilters()

    return <StockBalancesFiltersContext.Provider value={state}>{children}</StockBalancesFiltersContext.Provider>
}

export default StockBalancesFiltersContextProvider
