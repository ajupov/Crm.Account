import React, { FC } from 'react'

import StockBalanceChangesFiltersContext from './StockBalanceChangesFiltersContext'
import useStockBalanceChangesFilters from './hooks/useStockBalanceChangesFilters'

const StockBalanceChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useStockBalanceChangesFilters()

    return (
        <StockBalanceChangesFiltersContext.Provider value={state}>
            {children}
        </StockBalanceChangesFiltersContext.Provider>
    )
}

export default StockBalanceChangesFiltersContextProvider
